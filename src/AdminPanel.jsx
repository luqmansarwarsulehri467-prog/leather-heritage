import React, { useState, useEffect } from 'react';
import './Admin.css';

function AdminPanel() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Password management state
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  
  // Admin credentials stored in localStorage
  const [adminCredentials, setAdminCredentials] = useState({
    email: 'admin@leatherheritage.com',
    password: 'LeatherHeritage2026',
    secretCode: 'LH777'
  });

  // Product management state
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['Gloves', 'Bags', 'Jackets', 'Hides', 'Other']);
  const [newCategory, setNewCategory] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'Gloves',
    description: '',
    image: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  
  // Contact info state
  const [contactInfo, setContactInfo] = useState({
    address: 'Head Marala Road, Malkay Kalan, Sialkot Punjab-51310, Pakistan',
    phone: '0092-3276498723',
    email: 'Leatherheaven777@gmail.com',
    instagram: 'https://www.instagram.com/leather_heaven77?igsh=MXYzcTZ1bWpncmYwOA==',
    facebook: 'https://www.facebook.com',
    whatsapp: 'https://wa.me/923276498723'
  });
  const [showContactEdit, setShowContactEdit] = useState(false);
  
  // About content state
  const [aboutContent, setAboutContent] = useState('');
  const [showAboutEdit, setShowAboutEdit] = useState(false);
  
  // Active section
  const [activeSection, setActiveSection] = useState('products');

  // Load data from localStorage on mount
  useEffect(() => {
    // Load admin credentials
    const savedCredentials = localStorage.getItem('leatherHeritageAdminCredentials');
    if (savedCredentials) {
      setAdminCredentials(JSON.parse(savedCredentials));
    } else {
      localStorage.setItem('leatherHeritageAdminCredentials', JSON.stringify(adminCredentials));
    }

    // Load products
    const savedProducts = localStorage.getItem('leatherHeritageProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }

    // Load categories
    const savedCategories = localStorage.getItem('leatherHeritageCategories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    } else {
      localStorage.setItem('leatherHeritageCategories', JSON.stringify(categories));
    }

    // Load contact info
    const savedContactInfo = localStorage.getItem('leatherHeritageContactInfo');
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    } else {
      localStorage.setItem('leatherHeritageContactInfo', JSON.stringify(contactInfo));
    }

    // Load about content
    const savedAbout = localStorage.getItem('leatherHeritageAbout');
    if (savedAbout) {
      setAboutContent(savedAbout);
    }
  }, []);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (loginEmail === adminCredentials.email && loginPassword === adminCredentials.password) {
      setIsAuthenticated(true);
      setLoginEmail('');
      setLoginPassword('');
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  // Handle forgot password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    
    if (secretCode === adminCredentials.secretCode) {
      if (newPassword === confirmNewPassword && newPassword.length >= 8) {
        const updatedCredentials = { ...adminCredentials, password: newPassword };
        setAdminCredentials(updatedCredentials);
        localStorage.setItem('leatherHeritageAdminCredentials', JSON.stringify(updatedCredentials));
        alert('Password reset successfully! Please login with your new password.');
        setShowForgotPassword(false);
        setSecretCode('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        alert('Passwords do not match or are too short (minimum 8 characters).');
      }
    } else {
      alert('Invalid secret code. Please try again.');
    }
  };

  // Handle change password
  const handleChangePassword = (e) => {
    e.preventDefault();
    
    if (currentPassword === adminCredentials.password) {
      if (newPassword === confirmNewPassword && newPassword.length >= 8) {
        const updatedCredentials = { ...adminCredentials, password: newPassword };
        setAdminCredentials(updatedCredentials);
        localStorage.setItem('leatherHeritageAdminCredentials', JSON.stringify(updatedCredentials));
        alert('Password changed successfully!');
        setShowChangePassword(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        alert('New passwords do not match or are too short (minimum 8 characters).');
      }
    } else {
      alert('Current password is incorrect.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveSection('products');
  };

  // Save products to localStorage
  const saveProducts = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem('leatherHeritageProducts', JSON.stringify(updatedProducts));
  };

  // Save categories to localStorage
  const saveCategories = (updatedCategories) => {
    setCategories(updatedCategories);
    localStorage.setItem('leatherHeritageCategories', JSON.stringify(updatedCategories));
  };

  // Save contact info to localStorage
  const saveContactInfo = (updatedContactInfo) => {
    setContactInfo(updatedContactInfo);
    localStorage.setItem('leatherHeritageContactInfo', JSON.stringify(updatedContactInfo));
  };

  // Save about content to localStorage
  const saveAboutContent = (content) => {
    setAboutContent(content);
    localStorage.setItem('leatherHeritageAbout', content);
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({...formData, image: reader.result});
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      const updatedProducts = products.map(p => 
        p.id === editingId ? {...formData, id: editingId} : p
      );
      saveProducts(updatedProducts);
      setEditingId(null);
    } else {
      const newProduct = {
        ...formData,
        id: Date.now()
      };
      saveProducts([...products, newProduct]);
    }

    setFormData({
      name: '',
      category: categories[0] || 'Gloves',
      description: '',
      image: ''
    });
    setImageFile(null);
  };

  // Handle edit
  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
    setActiveSection('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== id);
      saveProducts(updatedProducts);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData({
      name: '',
      category: categories[0] || 'Gloves',
      description: '',
      image: ''
    });
    setEditingId(null);
    setImageFile(null);
  };

  // Add new category
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];
      saveCategories(updatedCategories);
      setNewCategory('');
      setShowAddCategory(false);
      alert(`Category "${newCategory}" added successfully!`);
    } else {
      alert('Category already exists or is empty.');
    }
  };

  // Delete category
  const handleDeleteCategory = (category) => {
    if (category === 'Other') {
      alert('Cannot delete the "Other" category.');
      return;
    }
    
    if (window.confirm(`Are you sure you want to delete the "${category}" category? Products in this category will need to be recategorized.`)) {
      const updatedCategories = categories.filter(c => c !== category);
      saveCategories(updatedCategories);
      
      // Update products in this category to "Other"
      const updatedProducts = products.map(p => 
        p.category === category ? {...p, category: 'Other'} : p
      );
      saveProducts(updatedProducts);
    }
  };

  // Update contact info
  const handleUpdateContactInfo = () => {
    saveContactInfo(contactInfo);
    setShowContactEdit(false);
    alert('Contact information updated successfully!');
  };

  // Update about content
  const handleUpdateAbout = () => {
    saveAboutContent(aboutContent);
    setShowAboutEdit(false);
    alert('About Us content updated successfully!');
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1>Leather Heritage</h1>
            <h2>Admin Panel</h2>
          </div>

          {!showForgotPassword ? (
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  placeholder="admin@leatherheritage.com"
                  className="login-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="login-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {loginError && <div className="error-message">{loginError}</div>}

              <button type="submit" className="login-button">Login</button>

              <button 
                type="button" 
                className="forgot-password-link"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </form>
          ) : (
            <form onSubmit={handleForgotPassword} className="login-form">
              <h3>Reset Password</h3>
              <div className="form-group">
                <label htmlFor="secretCode">Secret Code</label>
                <input
                  id="secretCode"
                  type="text"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                  required
                  placeholder="Enter secret code"
                  className="login-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  placeholder="Minimum 8 characters"
                  className="login-input"
                  minLength="8"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                <input
                  id="confirmNewPassword"
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                  placeholder="Re-enter new password"
                  className="login-input"
                  minLength="8"
                />
              </div>

              <button type="submit" className="login-button">Reset Password</button>

              <button 
                type="button" 
                className="forgot-password-link"
                onClick={() => {
                  setShowForgotPassword(false);
                  setSecretCode('');
                  setNewPassword('');
                  setConfirmNewPassword('');
                }}
              >
                Back to Login
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Admin Panel (after authentication)
  return (
    <div className="admin-panel">
      <div className="admin-header">
        <div>
          <h1>Leather Heritage - Admin Panel</h1>
          <p>Manage your website content</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-change-password" onClick={() => setShowChangePassword(true)}>
            Change Password
          </button>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="modal-overlay" onClick={() => setShowChangePassword(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword} className="change-password-form">
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  minLength="8"
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength="8"
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                  minLength="8"
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-submit">Change Password</button>
                <button type="button" className="btn-cancel" onClick={() => setShowChangePassword(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button 
          className={activeSection === 'products' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveSection('products')}
        >
          Products
        </button>
        <button 
          className={activeSection === 'categories' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveSection('categories')}
        >
          Categories
        </button>
        <button 
          className={activeSection === 'contact' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveSection('contact')}
        >
          Contact Info
        </button>
        <button 
          className={activeSection === 'about' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveSection('about')}
        >
          About Us
        </button>
      </div>

      <div className="admin-content">
        {/* Products Section */}
        {activeSection === 'products' && (
          <>
            <div className="product-form-section">
              <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
              <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                  <label htmlFor="name">Product Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="e.g., Premium Leather Gloves"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description *</label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                    rows="4"
                    placeholder="Describe the product features and quality..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Product Image *</label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                  />
                  <p className="helper-text">Or paste an image URL below:</p>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    className="url-input"
                  />
                  {formData.image && (
                    <div className="image-preview">
                      <img src={formData.image} alt="Preview" />
                    </div>
                  )}
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    {editingId ? 'Update Product' : 'Add Product'}
                  </button>
                  {editingId && (
                    <button type="button" onClick={handleCancel} className="btn-cancel">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="products-list-section">
              <h2>Current Products ({products.length})</h2>
              {products.length === 0 ? (
                <p className="no-products-msg">No products yet. Add your first product above!</p>
              ) : (
                <div className="products-list">
                  {products.map(product => (
                    <div key={product.id} className="product-item">
                      <div className="product-item-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product-item-info">
                        <h3>{product.name}</h3>
                        <span className="category-badge">{product.category}</span>
                        <p>{product.description}</p>
                      </div>
                      <div className="product-item-actions">
                        <button onClick={() => handleEdit(product)} className="btn-edit">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(product.id)} className="btn-delete">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Categories Section */}
        {activeSection === 'categories' && (
          <div className="categories-section">
            <h2>Manage Categories</h2>
            <div className="add-category-container">
              <button 
                className="btn-add-category" 
                onClick={() => setShowAddCategory(!showAddCategory)}
              >
                + Add New Category
              </button>
              
              {showAddCategory && (
                <div className="add-category-form">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter category name"
                  />
                  <button onClick={handleAddCategory} className="btn-submit">Add</button>
                  <button onClick={() => {
                    setShowAddCategory(false);
                    setNewCategory('');
                  }} className="btn-cancel">Cancel</button>
                </div>
              )}
            </div>

            <div className="categories-list">
              {categories.map(category => (
                <div key={category} className="category-item">
                  <span className="category-name">{category}</span>
                  <button 
                    onClick={() => handleDeleteCategory(category)} 
                    className="btn-delete-category"
                    disabled={category === 'Other'}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info Section */}
        {activeSection === 'contact' && (
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            {!showContactEdit ? (
              <>
                <div className="contact-display">
                  <p><strong>Address:</strong> {contactInfo.address}</p>
                  <p><strong>Phone:</strong> {contactInfo.phone}</p>
                  <p><strong>Email:</strong> {contactInfo.email}</p>
                  <p><strong>Instagram:</strong> {contactInfo.instagram}</p>
                  <p><strong>Facebook:</strong> {contactInfo.facebook}</p>
                  <p><strong>WhatsApp:</strong> {contactInfo.whatsapp}</p>
                </div>
                <button className="btn-edit-contact" onClick={() => setShowContactEdit(true)}>
                  Edit Contact Information
                </button>
              </>
            ) : (
              <div className="contact-edit-form">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Instagram URL</label>
                  <input
                    type="url"
                    value={contactInfo.instagram}
                    onChange={(e) => setContactInfo({...contactInfo, instagram: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Facebook URL</label>
                  <input
                    type="url"
                    value={contactInfo.facebook}
                    onChange={(e) => setContactInfo({...contactInfo, facebook: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp URL</label>
                  <input
                    type="url"
                    value={contactInfo.whatsapp}
                    onChange={(e) => setContactInfo({...contactInfo, whatsapp: e.target.value})}
                  />
                </div>
                <div className="form-actions">
                  <button className="btn-submit" onClick={handleUpdateContactInfo}>
                    Save Changes
                  </button>
                  <button className="btn-cancel" onClick={() => setShowContactEdit(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* About Us Section */}
        {activeSection === 'about' && (
          <div className="about-section">
            <h2>About Us Content</h2>
            {!showAboutEdit ? (
              <>
                <div className="about-display">
                  {aboutContent.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <button className="btn-edit-about" onClick={() => setShowAboutEdit(true)}>
                  Edit About Us
                </button>
              </>
            ) : (
              <div className="about-edit-form">
                <textarea
                  value={aboutContent}
                  onChange={(e) => setAboutContent(e.target.value)}
                  rows="15"
                  className="about-textarea"
                  placeholder="Enter About Us content. Use double line breaks to separate paragraphs."
                />
                <div className="form-actions">
                  <button className="btn-submit" onClick={handleUpdateAbout}>
                    Save Changes
                  </button>
                  <button className="btn-cancel" onClick={() => setShowAboutEdit(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
