// ============================================
// MATHY BAKERY — About Page
// ============================================

function renderAbout() {
  return `
    <div class="about-page">
      <div class="container">
        <!-- Hero -->
        <div class="about-hero">
          <span class="section-subtitle">Our Story</span>
          <h1>A Local Favourite, Built with Passion</h1>
          <p>Mathy Bakery began with a simple vision — to bring quality baking to the heart of Marthandam. After completing a professional baking course, the founder set out to create a space where people could enjoy fresh, reliable, and satisfying treats every day.</p>
          <p>What started as a small initiative has now grown into a well-known name in town, loved for its consistency, variety, and the trust it has built among customers over the years.</p>
        </div>

        <!-- Story Section -->
        <div class="about-story">
          <div class="about-story-image">
            <img src="assets/images/hero-banner.png" alt="Inside Mathy Bakery">
          </div>
          <div class="about-story-content">
            <span class="section-subtitle">The Journey</span>
            <h2>From a Simple Start to a Local Favourite</h2>
            <p>Mathy Bakery was built on a strong foundation of learning, dedication, and a passion for baking. What began after formal training in baking technology has grown into a busy and well-recognised bakery in the centre of Marthandam.</p>
            <p>Located in one of the town’s most active areas, the bakery has become a go-to spot for a wide variety of everyday favourites — from cakes and pastries to traditional Indian sweets and snacks. Known for its fast-moving items and consistent taste, Mathy continues to serve customers who return time and again.</p>
            <p>The bakery reflects the essence of a traditional Indian bakery — vibrant, diverse, and full of choice — offering something for every craving and every occasion.</p>
          </div>
        </div>

        <!-- Values -->
        <section class="section">
          <div class="section-header">
            <span class="section-subtitle">What Drives Us</span>
            <h2>Our Values</h2>
          </div>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🌾</div>
              <h4>Quality First</h4>
              <p>We focus on delivering consistent taste and quality across all our products, made fresh and served daily.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">👨‍🍳</div>
              <h4>Handcrafted</h4>
              <p>Every item is prepared with care and attention, ensuring a reliable and satisfying experience every time.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🌿</div>
              <h4>Variety</h4>
              <p>A wide range of cakes, snacks, and traditional sweets — offering something for every taste and every time of day.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">❤️</div>
              <h4>Community</h4>
              <p>A familiar spot in Marthandam where customers come not just for food, but for comfort and everyday moments.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">✨</div>
              <h4>Innovation</h4>
              <p>We continue to introduce new items and flavours while staying true to the favourites our customers love.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎂</div>
              <h4>Celebration</h4>
              <p>From small cravings to special occasions, our products are part of everyday celebrations.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="section" style="text-align: center; background: var(--color-beige); border-radius: var(--radius-lg); padding: var(--space-3xl); margin-bottom: var(--space-3xl);">
          <h2 style="margin-bottom: var(--space-md);">Come Visit Us</h2>
          <p style="max-width: 480px; margin: 0 auto var(--space-xl);">We'd love to welcome you to our bakery. Step in for a fresh croissant, a warm smile, and the aroma of freshly baked goods.</p>
          <a href="#/contact" class="btn btn-primary">Get in Touch</a>
        </section>
      </div>
    </div>
  `;
}
