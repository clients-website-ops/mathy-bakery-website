// ============================================
// MATHY BAKERY — Shop Page
// ============================================

function renderShop() {
  // Parse URL params for initial filters
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const initialCategory = params.get('category') || 'All';

  return `
    <div class="page-banner">
      <div class="container">
        <h1>Our Shop</h1>
        <div class="breadcrumb">
          <a href="#/">Home</a>
          <span>/</span>
          <span>Shop</span>
        </div>
      </div>
    </div>

    <div class="container">
      <button class="mobile-filter-toggle" onclick="toggleShopFilters()">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
        Filters
      </button>

      <div class="shop-layout">
        <!-- Sidebar -->
        <aside class="shop-sidebar" id="shop-sidebar">
          <h3>Filters</h3>
          
          <div class="filter-group">
            <h4>Category</h4>
            <label class="filter-option">
              <input type="radio" name="category" value="All" ${initialCategory === 'All' ? 'checked' : ''} onchange="applyShopFilters()">
              All Products
            </label>
            ${['Cakes', 'Pastries', 'Desserts', 'Custom Cakes'].map(cat => `
              <label class="filter-option">
                <input type="radio" name="category" value="${cat}" ${initialCategory === cat ? 'checked' : ''} onchange="applyShopFilters()">
                ${cat}
              </label>
            `).join('')}
          </div>

          <div class="filter-group">
            <h4>Price Range</h4>
            <label class="filter-option">
              <input type="radio" name="price" value="all" checked onchange="applyShopFilters()">
              All Prices
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="0-300" onchange="applyShopFilters()">
              Under ₹300
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="300-700" onchange="applyShopFilters()">
              ₹300 — ₹700
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="700-1500" onchange="applyShopFilters()">
              ₹700 — ₹1,500
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="1500-99999" onchange="applyShopFilters()">
              Above ₹1,500
            </label>
          </div>
        </aside>

        <!-- Products -->
        <div class="shop-content">
          <div class="shop-header">
            <div>
              <h2 id="shop-title">${initialCategory === 'All' ? 'All Products' : initialCategory}</h2>
              <span class="results-count" id="results-count"></span>
            </div>
            <div class="shop-sort">
              <select id="shop-sort" onchange="applyShopFilters()">
                <option value="">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <div class="product-grid" id="shop-products-grid">
          </div>
        </div>
      </div>
    </div>
  `;
}

function initShop() {
  applyShopFilters();
}

function applyShopFilters() {
  const categoryEl = document.querySelector('input[name="category"]:checked');
  const priceEl = document.querySelector('input[name="price"]:checked');
  const sortEl = document.getElementById('shop-sort');

  const category = categoryEl ? categoryEl.value : 'All';
  const priceRange = priceEl ? priceEl.value : 'all';
  const sort = sortEl ? sortEl.value : '';

  let minPrice, maxPrice;
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    minPrice = min;
    maxPrice = max;
  }

  const products = filterProducts({ category, minPrice, maxPrice, sort });

  const grid = document.getElementById('shop-products-grid');
  const title = document.getElementById('shop-title');
  const count = document.getElementById('results-count');

  if (grid) {
    grid.innerHTML = products.length > 0
      ? products.map(p => renderProductCard(p)).join('')
      : `<div class="empty-state" style="grid-column: 1/-1;">
           <h3>No products found</h3>
           <p>Try adjusting your filters</p>
         </div>`;
  }

  if (title) title.textContent = category === 'All' ? 'All Products' : category;
  if (count) count.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
}

function toggleShopFilters() {
  const sidebar = document.getElementById('shop-sidebar');
  if (sidebar) sidebar.classList.toggle('active');
}
