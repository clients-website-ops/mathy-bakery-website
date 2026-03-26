// ============================================
// MATHY BAKERY — Checkout & Confirmation
// ============================================

function renderCheckout() {
  const cart = Cart.getCart();

  if (cart.length === 0) {
    return `
      <div class="checkout-page">
        <div class="container" style="text-align: center; padding-top: calc(var(--header-height) + var(--space-4xl));">
          <h2>Nothing to checkout</h2>
          <p style="margin: var(--space-md) 0 var(--space-xl);">Your cart is empty. Add some delicious treats first!</p>
          <a href="#/shop" class="btn btn-primary">Browse Products</a>
        </div>
      </div>
    `;
  }

  const subtotal = Cart.getCartTotal();
  const deliveryFee = subtotal >= 500 ? 0 : 49;
  const total = subtotal + deliveryFee;

  return `
    <div class="checkout-page">
      <div class="container">
        <div class="breadcrumb" style="justify-content: flex-start; margin-bottom: var(--space-xl);">
          <a href="#/">Home</a>
          <span>/</span>
          <a href="#/cart">Cart</a>
          <span>/</span>
          <span>Checkout</span>
        </div>

        <h1 style="margin-bottom: var(--space-xl);">Checkout</h1>

        <div class="checkout-layout">
          <!-- Form -->
          <div class="checkout-form">
            <div class="checkout-section">
              <h3>Delivery Details</h3>
              <div class="form-group">
                <label for="checkout-name">Full Name *</label>
                <input type="text" id="checkout-name" placeholder="Your full name" required>
              </div>
              <div class="form-group">
                <label for="checkout-phone">Phone Number *</label>
                <input type="tel" id="checkout-phone" placeholder="+91 98765 43210" required>
              </div>
              <div class="form-group">
                <label for="checkout-address">Delivery Address *</label>
                <textarea id="checkout-address" placeholder="Full address with landmark" required></textarea>
              </div>
              <div class="form-group">
                <label for="checkout-notes">Delivery Notes (optional)</label>
                <input type="text" id="checkout-notes" placeholder="Any special instructions?">
              </div>
            </div>

            <div class="checkout-section">
              <h3>Payment Method</h3>
              <div class="payment-methods">
                <div class="payment-method selected" onclick="selectPayment(this, 'upi')" data-method="upi">
                  <div style="font-size: 1.5rem; margin-bottom: var(--space-xs);">📱</div>
                  <div>UPI</div>
                </div>
                <div class="payment-method" onclick="selectPayment(this, 'card')" data-method="card">
                  <div style="font-size: 1.5rem; margin-bottom: var(--space-xs);">💳</div>
                  <div>Card</div>
                </div>
                <div class="payment-method" onclick="selectPayment(this, 'cod')" data-method="cod">
                  <div style="font-size: 1.5rem; margin-bottom: var(--space-xs);">💵</div>
                  <div>Cash on Delivery</div>
                </div>
              </div>
            </div>

            <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="placeOrder()">
              Place Order — ${formatPrice(total)}
            </button>
          </div>

          <!-- Order Summary Sidebar -->
          <div class="order-summary-sidebar">
            <h3>Order Summary</h3>
            ${cart.map(item => `
              <div class="order-summary-item">
                <div class="item-name">
                  <span class="item-qty">${item.qty}</span>
                  <span>${item.name} (${item.size})</span>
                </div>
                <span>${formatPrice(item.price * item.qty)}</span>
              </div>
            `).join('')}
            <div style="border-top: 1px solid var(--color-beige-dark); margin-top: var(--space-md); padding-top: var(--space-md);">
              <div class="cart-summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
              </div>
              <div class="cart-summary-row">
                <span>Delivery</span>
                <span>${deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</span>
              </div>
              <div class="cart-summary-row total">
                <span>Total</span>
                <span>${formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

let selectedPayment = 'upi';

function selectPayment(el, method) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = method;
}

function placeOrder() {
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();

  if (!name || !phone || !address) {
    Cart.showToast('Please fill in all required fields');
    return;
  }

  if (phone.replace(/\D/g, '').length < 10) {
    Cart.showToast('Please enter a valid phone number');
    return;
  }

  // Simulate payment processing
  if (selectedPayment === 'upi' || selectedPayment === 'card') {
    // In production, this would integrate with Razorpay
    simulateRazorpay(name, phone, address);
  } else {
    // COD
    completeOrder(name, phone, address, 'Cash on Delivery');
  }
}

function simulateRazorpay(name, phone, address) {
  // Mock Razorpay flow
  const total = Cart.getCartTotal() + (Cart.getCartTotal() >= 500 ? 0 : 49);
  
  // Check if Razorpay is loaded (would be in production)
  if (typeof Razorpay !== 'undefined') {
    const options = {
      key: 'rzp_test_placeholder',
      amount: total * 100,
      currency: 'INR',
      name: 'Mathy Bakery',
      description: 'Order Payment',
      handler: function(response) {
        completeOrder(name, phone, address, `Paid via ${selectedPayment.toUpperCase()} (${response.razorpay_payment_id})`);
      },
      prefill: { name, contact: phone },
      theme: { color: '#3E2723' }
    };
    const rzp = new Razorpay(options);
    rzp.open();
  } else {
    // Demo mode — simulate success
    setTimeout(() => {
      completeOrder(name, phone, address, `${selectedPayment.toUpperCase()} (Demo Mode)`);
    }, 800);
  }
}

function completeOrder(name, phone, address, paymentMethod) {
  const cart = Cart.getCart();
  const subtotal = Cart.getCartTotal();
  const deliveryFee = subtotal >= 500 ? 0 : 49;
  const total = subtotal + deliveryFee;
  const orderId = 'MB' + Date.now().toString().slice(-8);

  // Store order info for confirmation page
  window._lastOrder = {
    orderId,
    name,
    phone,
    address,
    paymentMethod,
    items: cart,
    subtotal,
    deliveryFee,
    total,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  };

  Cart.clearCart();
  navigateTo('/order-confirmation');
}

function renderOrderConfirmation() {
  const order = window._lastOrder;

  if (!order) {
    return `
      <div class="checkout-page">
        <div class="container" style="text-align: center; padding-top: calc(var(--header-height) + var(--space-4xl));">
          <h2>No order found</h2>
          <p style="margin: var(--space-md) 0 var(--space-xl);">Please place an order first.</p>
          <a href="#/shop" class="btn btn-primary">Browse Products</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="checkout-page">
      <div class="container">
        <div class="order-confirmation">
          <div class="check-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h1>Order Confirmed!</h1>
          <p>Thank you, ${order.name}! Your order has been placed successfully. We're preparing your treats with love.</p>

          <div class="order-details-box">
            <div class="detail-row">
              <span class="detail-label">Order ID</span>
              <span class="detail-value">${order.orderId}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date</span>
              <span class="detail-value">${order.date}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Delivery To</span>
              <span class="detail-value">${order.address}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone</span>
              <span class="detail-value">${order.phone}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment</span>
              <span class="detail-value">${order.paymentMethod}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Items</span>
              <span class="detail-value">${order.items.map(i => `${i.name} × ${i.qty}`).join(', ')}</span>
            </div>
            <div class="detail-row" style="border-top: 2px solid var(--color-beige); margin-top: var(--space-sm); padding-top: var(--space-md);">
              <span class="detail-label" style="font-weight: 700; color: var(--color-brown);">Total Paid</span>
              <span class="detail-value" style="font-size: 1.2rem; color: var(--color-brown);">${formatPrice(order.total)}</span>
            </div>
          </div>

          <div style="display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
            <a href="#/" class="btn btn-primary">Back to Home</a>
            <a href="#/shop" class="btn btn-outline">Order More</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
