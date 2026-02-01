:root {
  --primary: #1f7bbf;
  --primary-dark: #165885;
  --accent: #111111;
  --bg: #f5f7fa;
  --text-main: #222222;
  --text-muted: #666666;
  --white: #ffffff;
  --shadow-soft: 0 10px 25px rgba(0, 0, 0, 0.08);
  --radius-lg: 12px;
  --radius-md: 8px;
  --radius-sm: 4px;
  --transition-fast: 0.2s ease-in-out;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text-main);
}

/* Header */

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 6vw;
  background: var(--white);
  box-shadow: var(--shadow-soft);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  position: relative;
  width: 48px;
  height: 48px;
}

.roof {
  width: 100%;
  height: 60%;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  clip-path: polygon(50% 0%, 0% 60%, 100% 60%);
}

.chimney {
  position: absolute;
  top: 12%;
  right: 18%;
  width: 18%;
  height: 30%;
  background: var(--accent);
  border-radius: 2px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--accent);
}

.logo-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.contact-names {
  display: flex;
  gap: 8px;
}

.name-tag {
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--primary);
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 600;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
}

.contact-block {
  font-size: 0.85rem;
}

.contact-label {
  font-weight: 600;
  margin-right: 4px;
}

.contact-block a {
  color: var(--primary-dark);
  text-decoration: none;
  margin-left: 4px;
}

.contact-block a:hover {
  text-decoration: underline;
}

/* Buttons */

.btn {
  border: none;
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.primary-btn {
  background: var(--primary);
  color: var(--white);
  box-shadow: var(--shadow-soft);
}

.primary-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.secondary-btn {
  background: var(--white);
  color: var(--primary-dark);
  border: 1px solid var(--primary);
}

.secondary-btn:hover {
  background: #e9f3fb;
}

/* Hero */

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 32px;
  padding: 40px 6vw 24px;
  align-items: center;
}

.hero-text h1 {
  font-size: 2.1rem;
  margin-bottom: 12px;
}

.hero-text p {
  margin: 8px 0;
  color: var(--text-muted);
  line-height: 1.5;
}

.hero-images {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.image-card {
  position: relative;
  border-radius: var(--radius-lg);
  padding: 16px;
  color: var(--white);
  font-weight: 600;
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}

.image-card span {
  position: relative;
  z-index: 1;
}

.image-card::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.85;
  background-size: cover;
  background-position: center;
}

.image-deck::before {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg");
}

.image-windows::before {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg");
}

.image-roofing::before {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.pexels.com/photos/532568/pexels-photo-532568.jpeg");
}

/* Services */

.services-section {
  padding: 24px 6vw;
}

.services-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.services-list {
  display: none;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.services-list.show {
  display: flex;
}

.service-item {
  padding: 8px 14px;
  border-radius: var(--radius-md);
  border: 1px solid #d0d7e2;
  background: var(--white);
  cursor: pointer;
  font-size: 0.9rem;
  transition: background var(--transition-fast), transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.service-item:hover {
  background: #eef4fb;
  box-shadow: var(--shadow-soft);
  transform: translateY(-1px);
}

/* Form */

.form-section {
  padding: 24px 6vw 40px;
  max-width: 800px;
  margin: 0 auto;
}

.form-section h2 {
  margin-bottom: 4px;
}

.form-subtitle {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--text-muted);
}

form {
  background: var(--white);
  padding: 20px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.form-row label {
  font-size: 0.9rem;
  margin-bottom: 4px;
  font-weight: 600;
}

.form-row input,
.form-row textarea {
  border-radius: var(--radius-md);
  border: 1px solid #d0d7e2;
  padding: 8px 10px;
  font-size: 0.9rem;
  font-family: inherit;
}

.form-row input:focus,
.form-row textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(31, 123, 191, 0.15);
}

.form-actions {
  margin-top: 16px;
  text-align: right;
}

.form-note {
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Footer */

.site-footer {
  padding: 16px 6vw 24px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Responsive */

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .header-right {
    align-items: flex-start;
  }

  .contact-details {
    text-align: left;
  }
}

@media (max-width: 600px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .services-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .form-section {
    padding-inline: 4vw;
  }

  .hero {
    padding-inline: 4vw;
  }
}
