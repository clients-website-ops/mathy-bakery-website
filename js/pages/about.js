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
          <h1>Baking Happiness Since 2018</h1>
          <p>What started as a small home kitchen experiment has grown into a beloved neighborhood bakery. At Mathy, every recipe tells a story of passion, precision, and the pursuit of perfection.</p>
        </div>

        <!-- Story Section -->
        <div class="about-story">
          <div class="about-story-image">
            <img src="assets/images/hero-banner.png" alt="Inside Mathy Bakery">
          </div>
          <div class="about-story-content">
            <span class="section-subtitle">The Beginning</span>
            <h2>From Home Kitchen to Your Heart</h2>
            <p>Mathy Bakery was born from a simple belief: that great baking brings people together. Our founder started with just a home oven, a bag of flour, and an unwavering commitment to quality.</p>
            <p>Today, our team of passionate bakers crafts each item by hand, using time-honored techniques and the finest ingredients sourced from trusted local farmers and premium international suppliers.</p>
            <p>We don't use preservatives, artificial flavors, or shortcuts. Every croissant is laminated with real butter. Every cake is layered with care. Every cookie is baked with love.</p>
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
              <p>We source only the finest ingredients — real butter, premium chocolate, and seasonal fruits. No compromises.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">👨‍🍳</div>
              <h4>Handcrafted</h4>
              <p>Every item is made by hand in small batches, ensuring attention to detail and consistent excellence.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🌿</div>
              <h4>Sustainability</h4>
              <p>We use eco-friendly packaging and source locally wherever possible to reduce our environmental footprint.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">❤️</div>
              <h4>Community</h4>
              <p>More than a bakery — we're a neighborhood gathering spot where people come for warmth and connection.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">✨</div>
              <h4>Innovation</h4>
              <p>We constantly experiment with new flavors and techniques while respecting classic baking traditions.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎂</div>
              <h4>Celebration</h4>
              <p>Every order is a reason to celebrate. We infuse joy into every box, every cake, every bite.</p>
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
