// ============================================
// MATHY BAKERY — Cart Logic
// ============================================

const Cart = {
  STORAGE_KEY: 'mathy_bakery_cart',

  getCart() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    this.dispatchUpdate();
  },

  addToCart(productId, size, qty = 1) {
    const cart = this.getCart();
    const product = getProductById(productId);
    if (!product) return;

    const sizeObj = product.sizes.find(s => s.label === size) || product.sizes[0];
    const cartItemId = `${productId}_${sizeObj.label}`;
    
    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    
    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        image: product.image,
        size: sizeObj.label,
        price: sizeObj.price,
        qty: qty,
        category: product.category
      });
    }
    
    this.saveCart(cart);
    this.showToast(`${product.name} added to cart`);
    return cart;
  },

  removeFromCart(cartItemId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    this.saveCart(cart);
    return cart;
  },

  updateQty(cartItemId, qty) {
    const cart = this.getCart();
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (item) {
      if (qty <= 0) {
        return this.removeFromCart(cartItemId);
      }
      item.qty = qty;
      this.saveCart(cart);
    }
    return cart;
  },

  getCartTotal() {
    return this.getCart().reduce((total, item) => total + (item.price * item.qty), 0);
  },

  getCartCount() {
    return this.getCart().reduce((count, item) => count + item.qty, 0);
  },

  clearCart() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.dispatchUpdate();
  },

  dispatchUpdate() {
    window.dispatchEvent(new CustomEvent('cart-updated', {
      detail: {
        count: this.getCartCount(),
        total: this.getCartTotal()
      }
    }));
  },

  showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      ${message}
    `;
    
    // Trigger reflow
    toast.offsetHeight;
    toast.classList.add('show');
    
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
};

// Format currency
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}
