// ============================================
// MATHY BAKERY — Product Detail Page
// ============================================

function renderProduct(id) {
  const product = getProductById(id);
  if (!product) {
    return `
      <div class="container" style="padding-top: calc(var(--header-height) + var(--space-3xl)); text-align: center;">
        <div class="empty-state">
          <h3>Product Not Found</h3>
          <p>The product you're looking for doesn't exist.</p>
          <a href="#/shop" class="btn btn-primary">Back to Shop</a>
        </div>
      </div>
    `;
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return `
    <div class="product-detail">
      <div class="container">
        <!-- Breadcrumb -->
        <div class="breadcrumb" style="justify-content: flex-start; margin-bottom: var(--space-xl);">
          <a href="#/">Home</a>
          <span>/</span>
          <a href="#/shop">Shop</a>
          <span>/</span>
          <a href="#/shop?category=${encodeURIComponent(product.category)}">${product.category}</a>
          <span>/</span>
          <span style="color: var(--color-brown);">${product.name}</span>
        </div>

        <div class="product-detail-layout">
          <!-- Image -->
          <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
          </div>

          <!-- Info -->
          <div class="product-detail-info">
            <div class="product-detail-category">${product.category}</div>
            <h1>${product.name}</h1>
            <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
              <span style="color: var(--color-gold); font-size: 0.95rem;">★ ${product.rating}</span>
              ${product.bestseller ? '<span class="product-card-badge" style="position: static;">Bestseller</span>' : ''}
            </div>
            <div class="product-detail-price" id="product-price">
              ${formatPrice(product.sizes[0].price)}
              ${product.originalPrice ? `<span style="font-size: 1rem; color: var(--color-gray); text-decoration: line-through; font-weight: 400; margin-left: var(--space-sm);">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <p class="product-detail-description">${product.description}</p>

            <!-- Size Options -->
            <div class="size-options">
              <h4>Size</h4>
              <div class="size-options-grid">
                ${product.sizes.map((s, i) => `
                  <button class="size-option ${i === 0 ? 'selected' : ''}" 
                          onclick="selectSize(this, ${product.id}, '${s.label}', ${s.price})"
                          data-size="${s.label}" 
                          data-price="${s.price}">
                    ${s.label} — ${formatPrice(s.price)}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Quantity -->
            <div class="quantity-selector">
              <h4>Quantity</h4>
              <div class="quantity-controls">
                <button onclick="changeProductQty(-1)">−</button>
                <span id="product-qty">1</span>
                <button onclick="changeProductQty(1)">+</button>
              </div>
            </div>

            <!-- Add to Cart -->
            <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="addProductToCart(${product.id})" id="add-to-cart-btn">
              Add to Cart — <span id="add-to-cart-price">${formatPrice(product.sizes[0].price)}</span>
            </button>
          </div>
        </div>

        ${relatedProducts.length > 0 ? `
          <!-- Related Products -->
          <section class="section">
            <div class="section-header">
              <span class="section-subtitle">You May Also Like</span>
              <h2>Related Products</h2>
            </div>
            <div class="product-grid">
              ${relatedProducts.map(p => renderProductCard(p)).join('')}
            </div>
          </section>
        ` : ''}
      </div>
    </div>
  `;
}

// Product detail state
let selectedSize = null;
let selectedPrice = 0;
let productQty = 1;

function initProduct(id) {
  const product = getProductById(id);
  if (product) {
    selectedSize = product.sizes[0].label;
    selectedPrice = product.sizes[0].price;
    productQty = 1;
  }
}

function selectSize(el, productId, size, price) {
  // Update selection visual
  document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
  el.classList.add('selected');
  
  selectedSize = size;
  selectedPrice = price;
  productQty = 1;
  
  // Update price displays
  const priceEl = document.getElementById('product-price');
  const addPriceEl = document.getElementById('add-to-cart-price');
  const qtyEl = document.getElementById('product-qty');
  
  if (priceEl) priceEl.textContent = formatPrice(price);
  if (addPriceEl) addPriceEl.textContent = formatPrice(price);
  if (qtyEl) qtyEl.textContent = '1';
}

function changeProductQty(delta) {
  productQty = Math.max(1, productQty + delta);
  const qtyEl = document.getElementById('product-qty');
  const addPriceEl = document.getElementById('add-to-cart-price');
  
  if (qtyEl) qtyEl.textContent = productQty;
  if (addPriceEl) addPriceEl.textContent = formatPrice(selectedPrice * productQty);
}

function addProductToCart(productId) {
  Cart.addToCart(productId, selectedSize, productQty);
}
