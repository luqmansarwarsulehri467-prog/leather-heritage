import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [categories, setCategories] = useState(['All', 'Gloves', 'Bags', 'Jackets', 'Hides', 'Other']);
  const [contactInfo, setContactInfo] = useState({
    address: 'Head Marala Road, Malkay Kalan, Sialkot Punjab-51310, Pakistan',
    phone: '0092-3276498723',
    email: 'Leatherheaven777@gmail.com',
    instagram: 'https://www.instagram.com/leather_heaven77?igsh=MXYzcTZ1bWpncmYwOA==',
    facebook: 'https://www.facebook.com',
    whatsapp: 'https://wa.me/923276498723'
  });
  const [aboutContent, setAboutContent] = useState('');

  // Load data from localStorage on mount
  useEffect(() => {
    // Load products
    const savedProducts = localStorage.getItem('leatherHeritageProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Initialize with sample products (without price)
      const sampleProducts = [
        {
          id: 1,
          name: 'Premium Leather Gloves',
          category: 'Gloves',
          description: 'High-quality leather gloves crafted with precision and care.',
          image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop'
        },
        {
          id: 2,
          name: 'Classic Leather Bag',
          category: 'Bags',
          description: 'Timeless leather bag perfect for everyday use.',
          image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop'
        },
        {
          id: 3,
          name: 'Vintage Leather Jacket',
          category: 'Jackets',
          description: 'Authentic vintage-style leather jacket.',
          image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop'
        }
      ];
      setProducts(sampleProducts);
      localStorage.setItem('leatherHeritageProducts', JSON.stringify(sampleProducts));
    }

    // Load categories
    const savedCategories = localStorage.getItem('leatherHeritageCategories');
    if (savedCategories) {
      const parsedCategories = JSON.parse(savedCategories);
      setCategories(['All', ...parsedCategories]);
    }

    // Load contact info
    const savedContactInfo = localStorage.getItem('leatherHeritageContactInfo');
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    }

    // Load about content
    const savedAbout = localStorage.getItem('leatherHeritageAbout');
    if (savedAbout) {
      setAboutContent(savedAbout);
    } else {
      const defaultAbout = `Welcome to Leather Heritage, your premier destination for exquisite leather products. With years of expertise in manufacturing and exporting, we pride ourselves on delivering exceptional quality leather goods to customers worldwide.

Our commitment to craftsmanship and attention to detail ensures that every product we create meets the highest standards of excellence. From premium leather gloves to luxurious bags and jackets, each item is carefully crafted using the finest materials and traditional techniques.

We serve customers across the globe, offering worldwide shipping to bring our premium leather products directly to your doorstep. Our dedication to customer satisfaction and product quality has made us a trusted name in the leather industry.

Experience the heritage of fine leather craftsmanship with our carefully curated collection.`;
      setAboutContent(defaultAbout);
      localStorage.setItem('leatherHeritageAbout', defaultAbout);
    }
  }, []);

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  // Navigation component
  const Navigation = () => (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="Leather Heritage" className="logo-img" />
          <span className="logo-text">LEATHER HERITAGE</span>
        </div>
        <div className="nav-links">
          <button 
            className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('about')}
          >
            About Us
          </button>
          <button 
            className={currentPage === 'products' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          <button 
            className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );

  // Home page component
  const HomePage = () => (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Leather Heritage</h1>
          <p className="hero-subtitle">
            We are exporters and manufacturers of all kinds of leather skin products with worldwide shipping.
          </p>
          <button className="cta-button" onClick={() => setCurrentPage('products')}>
            Explore Products
          </button>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🌍</div>
          <h3>Worldwide Shipping</h3>
          <p>We deliver premium leather products to customers around the globe</p>
        </div>
        <div className="feature">
          <div className="feature-icon">✨</div>
          <h3>Premium Quality</h3>
          <p>Handcrafted with the finest materials and attention to detail</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🏭</div>
          <h3>Expert Manufacturing</h3>
          <p>Years of expertise in leather product manufacturing</p>
        </div>
      </div>
    </div>
  );

  // About Us page component
  const AboutPage = () => (
    <div className="about-page">
      <div className="about-header">
        <h1>About Leather Heritage</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          {aboutContent.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1608748010899-18f300247112?w=800&h=600&fit=crop" 
            alt="Leather craftsmanship" 
          />
        </div>
      </div>
    </div>
  );

  // Products page component
  const ProductsPage = () => (
    <div className="products-page">
      <div className="products-header">
        <h2>Our Products</h2>
        <div className="category-filter">
          <label htmlFor="category-select">Filter by Category:</label>
          <select 
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-products">No products available in this category.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <button className="view-details-btn" onClick={() => setCurrentPage('contact')}>
                  Contact for Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  // Contact page component
  const ContactPage = () => (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      
      <div className="contact-section">
        <div className="contact-form-container">
          <h3>Send us a Message</h3>
          <form onSubmit={handleContactSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              required
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              required
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              required
              className="form-textarea"
              rows="5"
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="social-links">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            
            <a href={`mailto:${contactInfo.email}`} className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </a>
          </div>

          <div className="contact-info">
            <h4>Contact Information</h4>
            <p><strong>Address:</strong> {contactInfo.address}</p>
            <p><strong>Phone:</strong> {contactInfo.phone}</p>
            <p><strong>Email:</strong> {contactInfo.email}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer component
  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Leather Heritage. All rights reserved.</p>
        <p>Developed & designed by Luqman Sarwar</p>
      </div>
    </footer>
  );

  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
