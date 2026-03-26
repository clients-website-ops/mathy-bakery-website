// ============================================
// MATHY BAKERY — App Router & Initialization
// ============================================

// ── Router ──
function navigateTo(path) {
  window.location.hash = '#' + path;
}

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const [path, query] = hash.split('?');
  return { path, query };
}

function router() {
  const { path } = getRoute();
  const app = document.getElementById('app');
  
  // Scroll to top
  window.scrollTo(0, 0);

  // Route matching
  let content = '';
  
  if (path === '/' || path === '') {
    content = renderHome();
    updateActiveNav('/');
  } else if (path === '/shop') {
    content = renderShop();
    updateActiveNav('/shop');
    // Init shop after render
    setTimeout(initShop, 0);
  } else if (path.startsWith('/product/')) {
    const id = path.split('/')[2];
    content = renderProduct(id);
    updateActiveNav('/shop');
    setTimeout(() => initProduct(id), 0);
  } else if (path === '/cart') {
    content = renderCartPage();
    updateActiveNav('/cart');
  } else if (path === '/checkout') {
    content = renderCheckout();
    updateActiveNav('/cart');
  } else if (path === '/order-confirmation') {
    content = renderOrderConfirmation();
    updateActiveNav('/');
  } else if (path === '/about') {
    content = renderAbout();
    updateActiveNav('/about');
  } else if (path === '/contact') {
    content = renderContact();
    updateActiveNav('/contact');
  } else {
    // 404
    content = `
      <div class="container" style="padding-top: calc(var(--header-height) + var(--space-4xl)); text-align: center; min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h1 style="font-size: 5rem; color: var(--color-beige-dark); margin-bottom: var(--space-md);">404</h1>
        <h2 style="margin-bottom: var(--space-md);">Page Not Found</h2>
        <p style="margin-bottom: var(--space-xl);">The page you're looking for doesn't exist.</p>
        <a href="#/" class="btn btn-primary">Back to Home</a>
      </div>
    `;
  }

  app.innerHTML = content;
}

// ── Active Nav ──
function updateActiveNav(currentPath) {
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('href')?.replace('#', '') || '/';
    link.classList.toggle('active', linkPath === currentPath);
  });
}

// ── Cart Badge ──
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const count = Cart.getCartCount();
    badge.textContent = count;
    badge.setAttribute('data-count', count);
    badge.style.display = count > 0 ? 'flex' : 'none';
    
    // Bump animation
    badge.classList.remove('bump');
    void badge.offsetHeight;
    badge.classList.add('bump');
  }
}

// ── Mobile Nav ──
function toggleMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

function closeMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) hamburger.classList.remove('active');
  if (navLinks) navLinks.classList.remove('active');
}

// ── Header Scroll ──
function handleScroll() {
  const header = document.querySelector('.header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
}

// ── Initialization ──
document.addEventListener('DOMContentLoaded', function() {
  // Set initial route
  if (!window.location.hash) {
    window.location.hash = '#/';
  }
  
  // Route on hash change
  window.addEventListener('hashchange', () => {
    closeMobileNav();
    router();
  });
  
  // Initial render
  router();
  
  // Update cart badge
  updateCartBadge();
  
  // Listen for cart updates
  window.addEventListener('cart-updated', updateCartBadge);
  
  // Scroll effects
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Close mobile nav when clicking a nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
});
