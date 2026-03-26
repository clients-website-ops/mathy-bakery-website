// ============================================
// MATHY BAKERY — Homepage
// ============================================

function renderHome() {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="assets/images/hero-banner.png" alt="Mathy Bakery — Freshly baked artisan goods">
      </div>
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <span class="section-subtitle" style="color: var(--color-gold-light);">Welcome to Mathy Bakery</span>
          <h1>Baked with Love, Crafted with Passion</h1>
          <p>Discover our handcrafted selection of cakes, pastries, and desserts — made fresh daily with the finest ingredients.</p>
          <div class="hero-actions">
            <a href="#/shop" class="btn btn-primary btn-lg">Order Now</a>
            <a href="#/about" class="btn btn-outline btn-lg" style="border-color: var(--color-cream); color: var(--color-cream);">Our Story</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section" style="background: var(--color-white);">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Explore</span>
          <h2>Our Categories</h2>
          <p>From classic cakes to custom creations, find your perfect treat</p>
        </div>
        <div class="categories-grid">
          ${CATEGORIES.map(cat => `
            <a href="#/shop?category=${encodeURIComponent(cat.name)}" class="category-card">
              <img src="${cat.image}" alt="${cat.name}">
              <div class="category-card-overlay">
                <h3>${cat.name}</h3>
                <span>${cat.count} items</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Bestsellers Section -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Bestsellers</span>
          <h2>Customer Favorites</h2>
          <p>Our most loved treats, handpicked by thousands of happy customers</p>
        </div>
        <div class="product-grid">
          ${getBestsellers().map(product => renderProductCard(product)).join('')}
        </div>
        <div style="text-align: center; margin-top: var(--space-2xl);">
          <a href="#/shop" class="btn btn-outline">View All Products</a>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="section" style="background: var(--color-white);">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Why Choose Us</span>
          <h2>The Mathy Difference</h2>
        </div>
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M7 12l3-3 7 7"/>
                <path d="M17 8l-7 7"/>
              </svg>
            </div>
            <h4>Fresh Ingredients</h4>
            <p>We source only the finest, locally-sourced ingredients. No preservatives, no shortcuts — just pure, honest baking.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h4>Same-Day Delivery</h4>
            <p>Order before 2 PM and enjoy your treats the very same day. Fast, careful delivery right to your doorstep.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h4>Artisan Quality</h4>
            <p>Every product is handcrafted by our master bakers with decades of experience. Quality you can taste in every bite.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background: var(--color-brown); text-align: center; padding: var(--space-4xl) 0;">
      <div class="container">
        <span class="section-subtitle" style="color: var(--color-gold);">Special Occasions</span>
        <h2 style="color: var(--color-cream); margin-bottom: var(--space-md);">Custom Cakes for Every Celebration</h2>
        <p style="color: var(--color-caramel); max-width: 560px; margin: 0 auto var(--space-xl);">
          From birthdays to weddings, our pastry artists create bespoke cakes tailored to your vision. Tell us your dream cake.
        </p>
        <a href="#/product/9" class="btn btn-secondary btn-lg">Design Your Cake</a>
      </div>
    </section>
  `;
}

function renderProductCard(product) {
  return `
    <div class="product-card" onclick="navigateTo('/product/${product.id}')">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.bestseller ? '<span class="product-card-badge">Bestseller</span>' : ''}
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-price">
          ${formatPrice(product.price)}
          ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <span style="font-size: 0.85rem; color: var(--color-gray);">★ ${product.rating}</span>
          <button class="btn-add-cart" onclick="event.stopPropagation(); Cart.addToCart(${product.id}, '${product.sizes[0].label}')">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}
