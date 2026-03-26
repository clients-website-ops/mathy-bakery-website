// ============================================
// MATHY BAKERY — Cart Page
// ============================================

function renderCartPage() {
  const cart = Cart.getCart();

  if (cart.length === 0) {
    return `
      <div class="cart-page">
        <div class="container">
          <div class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h3>Your Cart is Empty</h3>
            <p>Looks like you haven't added any treats yet. Explore our delicious selection!</p>
            <a href="#/shop" class="btn btn-primary">Continue Shopping</a>
          </div>
        </div>
      </div>
    `;
  }

  const subtotal = Cart.getCartTotal();
  const deliveryFee = subtotal >= 500 ? 0 : 49;
  const total = subtotal + deliveryFee;

  return `
    <div class="cart-page">
      <div class="container">
        <div class="breadcrumb" style="justify-content: flex-start; margin-bottom: var(--space-xl);">
          <a href="#/">Home</a>
          <span>/</span>
          <span>Cart</span>
        </div>

        <h1 style="margin-bottom: var(--space-xl);">Shopping Cart</h1>

        <div class="cart-layout">
          <!-- Cart Items -->
          <div class="cart-items" id="cart-items-list">
            ${cart.map(item => `
              <div class="cart-item" data-id="${item.cartItemId}">
                <div class="cart-item-image">
                  <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                  <h4>${item.name}</h4>
                  <div class="cart-item-size">Size: ${item.size}</div>
                  <div class="cart-item-price">${formatPrice(item.price)} each</div>
                  <div class="quantity-controls" style="margin-top: var(--space-sm);">
                    <button onclick="updateCartItem('${item.cartItemId}', ${item.qty - 1})">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateCartItem('${item.cartItemId}', ${item.qty + 1})">+</button>
                  </div>
                </div>
                <div class="cart-item-actions">
                  <div style="font-weight: 700; font-size: 1.05rem;">${formatPrice(item.price * item.qty)}</div>
                  <button class="cart-item-remove" onclick="removeCartItem('${item.cartItemId}')">Remove</button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Cart Summary -->
          <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="cart-summary-row">
              <span>Subtotal</span>
              <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="cart-summary-row">
              <span>Delivery</span>
              <span>${deliveryFee === 0 ? '<span style="color: var(--color-success);">Free</span>' : formatPrice(deliveryFee)}</span>
            </div>
            ${deliveryFee > 0 ? `
              <div style="font-size: 0.8rem; color: var(--color-gray); margin-top: var(--space-xs);">
                Free delivery on orders above ₹500
              </div>
            ` : ''}
            <div class="cart-summary-row total">
              <span>Total</span>
              <span>${formatPrice(total)}</span>
            </div>
            <a href="#/checkout" class="btn btn-primary">Proceed to Checkout</a>
            <a href="#/shop" class="btn btn-outline" style="width: 100%; margin-top: var(--space-sm);">Continue Shopping</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateCartItem(cartItemId, newQty) {
  Cart.updateQty(cartItemId, newQty);
  // Re-render cart page
  const app = document.getElementById('app');
  if (app) app.innerHTML = renderCartPage();
}

function removeCartItem(cartItemId) {
  Cart.removeFromCart(cartItemId);
  const app = document.getElementById('app');
  if (app) app.innerHTML = renderCartPage();
}
