// ============================================
// MATHY BAKERY — Contact Page
// ============================================

function renderContact() {
  return `
    <div class="contact-page">
      <div class="container">
        <!-- Header -->
        <div class="about-hero">
          <span class="section-subtitle">Get in Touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>Have a question, feedback, or a custom order request? Reach out to us — we're always happy to help.</p>
        </div>

        <div class="contact-layout">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send Us a Message</h2>
            <form id="contact-form" onsubmit="submitContactForm(event)">
              <div class="form-group">
                <label for="contact-name">Your Name *</label>
                <input type="text" id="contact-name" placeholder="Full name" required>
              </div>
              <div class="form-group">
                <label for="contact-email">Email Address *</label>
                <input type="email" id="contact-email" placeholder="you@example.com" required>
              </div>
              <div class="form-group">
                <label for="contact-subject">Subject</label>
                <select id="contact-subject">
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Related</option>
                  <option value="custom">Custom Cake Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="corporate">Corporate Orders</option>
                </select>
              </div>
              <div class="form-group">
                <label for="contact-message">Message *</label>
                <textarea id="contact-message" placeholder="Tell us what's on your mind..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-section">
            <h2>Contact Information</h2>
            
            <div class="contact-info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Baker Street, Indiranagar<br>Bangalore, Karnataka 560038</p>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210<br>+91 80 4567 8901</p>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>hello@mathybakery.com<br>orders@mathybakery.com</p>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h4>Hours</h4>
                <p>Mon – Sat: 8:00 AM – 9:00 PM<br>Sunday: 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            <!-- Map -->
            <div class="map-container" style="margin-top: var(--space-xl);">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0158!2d77.6408!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzgnMjcuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                width="100%" 
                height="100%" 
                style="border:0; border-radius: var(--radius-md);" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function submitContactForm(e) {
  e.preventDefault();
  
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  
  if (!name || !email || !message) {
    Cart.showToast('Please fill in all required fields');
    return;
  }

  // Simulate form submission
  Cart.showToast('Message sent! We\'ll get back to you soon.');
  document.getElementById('contact-form').reset();
}
