// ============================================
// MATHY BAKERY — Homepage
// ============================================

function renderHome() {
  return `
    <!-- Hero Section -->
    <section class="hero" id="hero-slider">
      <!-- Slide 1 -->
      <div class="hero-slide active">
        <div class="hero-bg">
          <img src="assets/Section 2.webp" alt="A World of Sweet Choices">
        </div>
        <div class="hero-overlay" style="background: linear-gradient(135deg, rgba(30, 20, 15, 0.85) 0%, rgba(30, 20, 15, 0.6) 50%, rgba(30, 20, 15, 0.4) 100%);"></div>
        <div class="container" style="width: 100%;">
          <div class="hero-content">
            <h1>A World of Sweet Choices</h1>
            <p>Explore a wide selection of treats, crafted to satisfy every craving and every occasion.</p>
            <div class="hero-actions">
              <a href="#/shop" class="btn btn-primary btn-lg" style="padding: 20px 48px; font-size: 1.15rem;">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Slide 2 -->
      <div class="hero-slide">
        <div class="hero-bg">
          <img src="assets/Section 1.jpg" alt="Rich. Decadent. Irresistible.">
        </div>
        <div class="hero-overlay" style="background: linear-gradient(135deg, rgba(30, 20, 15, 0.85) 0%, rgba(30, 20, 15, 0.6) 50%, rgba(30, 20, 15, 0.4) 100%);"></div>
        <div class="container" style="width: 100%;">
          <div class="hero-content">
            <h1>Rich. Decadent. Irresistible.</h1>
            <p>Indulge in our signature chocolate creations, crafted for those who love deep, rich flavours in every bite.</p>
            <div class="hero-actions">
              <a href="#/shop" class="btn btn-primary btn-lg" style="padding: 20px 48px; font-size: 1.15rem;">Order Now</a>
            </div>
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
          <span class="section-subtitle">WHY CUSTOMERS CHOOSE MATHY'S</span>
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
            <h4>Made Fresh, Served Daily</h4>
            <p>Our products are prepared fresh and served throughout the day, ensuring taste and quality our customers rely on.</p>
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
            <h4>Same-Day Orders Available</h4>
            <p>Select items are available for same-day orders. Place your order early to enjoy your favourites without the wait.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h4>Consistent Taste & Quality</h4>
            <p>Known for reliable taste and quality, our products are crafted with care and enjoyed by customers every day.</p>
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

let homeSliderInterval;
function initHome() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  
  let currentSlide = 0;
  if (homeSliderInterval) clearInterval(homeSliderInterval);
  
  homeSliderInterval = setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000); // Change slide every 5 seconds
}
