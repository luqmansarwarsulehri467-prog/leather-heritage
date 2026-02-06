# Leather Heritage Website - Version 2.0

## 🎉 Enhanced Professional Website with Full Admin Control

A complete, secure, production-ready website for Leather Heritage with advanced admin features and full content management.

---

## ✨ What's Included

### Core Features
- ✅ Professional homepage with hero section
- ✅ About Us page (NEW!)
- ✅ Products page with category filtering
- ✅ Contact Us page with form and social media
- ✅ Secure admin panel with authentication (NEW!)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ No prices displayed (as requested)

### Admin Panel Features
- ✅ **Secure Login**: Email and password authentication
- ✅ **Password Management**: Change password, forgot password with secret code
- ✅ **Product Management**: Add, edit, delete products (no price field)
- ✅ **Category Management**: Add and delete custom categories
- ✅ **Contact Info Editor**: Update all contact details and social media links
- ✅ **About Us Editor**: Manage About Us page content
- ✅ **Professional UI**: Tabbed navigation, modern design

### Security Features
- 🔒 Admin authentication required
- 🔒 Password show/hide toggle
- 🔒 Forgot password with secret code
- 🔒 Change password functionality
- 🔒 All data secured in browser storage

---

## 🚀 Quick Start

### 1. Install Node.js
Download from: https://nodejs.org/ (LTS version)

### 2. Setup Project
```bash
# Navigate to project folder
cd leather-heritage-v2

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Access Your Site
- **Main Website**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/admin

### 5. Login to Admin
**Default Credentials** (CHANGE IMMEDIATELY):
- Email: `admin@leatherheritage.com`
- Password: `LeatherHeritage2026`
- Secret Code: `LH777`

---

## 📖 Documentation

### Essential Guides
1. **QUICK_START.md** - Get running in 5 minutes
2. **ENHANCED_FEATURES_GUIDE.md** - Complete feature documentation
3. **MIGRATION_GUIDE.md** - Upgrade from V1 (if applicable)

### Quick Links
- [Admin Features](#admin-panel-features)
- [Security](#security-features)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎨 Pages Overview

### Public Pages (No Login Required)

#### 1. Home (`/`)
- Welcome message with hero banner
- Features showcase
- Call-to-action button

#### 2. About Us (`/about`) - NEW!
- Company story and information
- Professional image gallery
- Editable from admin panel

#### 3. Products (`/products`)
- Product grid with images
- Category filter dropdown
- No prices shown
- "Contact for Details" buttons

#### 4. Contact Us (`/contact`)
- Contact form
- Social media links
  - Instagram: https://www.instagram.com/leather_heaven77
  - Facebook
  - WhatsApp: https://wa.me/923276498723
  - Email: Leatherheaven777@gmail.com
- Contact information display

### Admin-Only Pages (Login Required)

#### 5. Admin Panel (`/admin`) - ENHANCED!
Four main sections:

**Products Tab**:
- Add new products (no price field)
- Edit existing products
- Delete products
- Upload images from computer or URL
- View all products in list

**Categories Tab**:
- View all categories
- Add new categories
- Delete categories (except "Other")
- Auto-updates product dropdown

**Contact Info Tab**:
- Edit address, phone, email
- Update social media links
- Instagram, Facebook, WhatsApp links
- Save changes instantly

**About Us Tab**:
- Edit About Us page content
- Live preview
- Paragraph formatting
- Save changes instantly

---

## 🔐 Admin Panel Guide

### First-Time Setup

1. **Access Admin Panel**:
   ```
   http://localhost:5173/admin
   ```

2. **Login with Default Credentials**:
   - Email: admin@leatherheritage.com
   - Password: LeatherHeritage2026

3. **IMMEDIATELY Change Password**:
   - Click "Change Password" button
   - Enter current password
   - Enter new password (min 8 characters)
   - Confirm and save

4. **Configure Your Content**:
   - Update Contact Information
   - Write About Us content
   - Add your products
   - Create custom categories

### Managing Products

**Add Product**:
1. Go to Products tab
2. Fill in:
   - Product Name
   - Category (select from dropdown)
   - Description
   - Image (upload or URL)
3. Click "Add Product"

**Edit Product**:
1. Find product in list
2. Click "Edit"
3. Make changes
4. Click "Update Product"

**Delete Product**:
1. Find product in list
2. Click "Delete"
3. Confirm deletion

### Managing Categories

**Add Category**:
1. Go to Categories tab
2. Click "+ Add New Category"
3. Enter category name
4. Click "Add"
5. New category appears in product form dropdown!

**Delete Category**:
1. Go to Categories tab
2. Click "Delete" next to category
3. Confirm deletion
4. Products in category move to "Other"

**Note**: Cannot delete "Other" category

### Updating Contact Info

1. Go to Contact Info tab
2. Click "Edit Contact Information"
3. Update any fields:
   - Address
   - Phone
   - Email
   - Instagram URL
   - Facebook URL
   - WhatsApp URL
4. Click "Save Changes"

### Editing About Us

1. Go to About Us tab
2. Click "Edit About Us"
3. Write/edit content
4. Use double line breaks for paragraphs
5. Click "Save Changes"

---

## 🔒 Security & Passwords

### Password Requirements
- Minimum 8 characters
- Should include:
  - Letters (uppercase and lowercase)
  - Numbers
  - Symbols (recommended)

### Changing Password (Logged In)
1. Click "Change Password" in admin header
2. Enter current password
3. Enter new password
4. Confirm new password
5. Click "Change Password"

### Forgot Password
1. Go to login page
2. Click "Forgot Password?"
3. Enter secret code (`LH777` default)
4. Enter new password
5. Confirm new password
6. Click "Reset Password"

### Changing Secret Code
1. Open browser console (F12)
2. Go to Application > Local Storage
3. Find `leatherHeritageAdminCredentials`
4. Edit the `secretCode` value
5. Save and refresh

**Important**: Store new secret code securely!

---

## 🌐 Deployment

### Deploy to Vercel (FREE)

#### Quick Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### GitHub Integration
1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Leather Heritage V2"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Import to Vercel:
   - Go to vercel.com
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

3. Auto-deploy on updates:
   - Any push to main branch
   - Automatically rebuilds and deploys
   - No manual steps needed

### Post-Deployment

1. Visit your site URL
2. Test all pages
3. Login to admin: `your-site.vercel.app/admin`
4. Change admin password
5. Configure content
6. Add products
7. Test thoroughly

### Custom Domain

1. Buy domain from:
   - Namecheap
   - GoDaddy
   - Google Domains

2. Add to Vercel:
   - Go to project settings
   - Click "Domains"
   - Add your domain
   - Follow DNS instructions

---

## 💾 Data Management

### Backup Your Data

All data is stored in browser localStorage. Back it up regularly:

```javascript
// Open browser console (F12)

// Backup Products
console.log(localStorage.getItem('leatherHeritageProducts'));

// Backup Categories
console.log(localStorage.getItem('leatherHeritageCategories'));

// Backup Contact Info
console.log(localStorage.getItem('leatherHeritageContactInfo'));

// Backup About Us
console.log(localStorage.getItem('leatherHeritageAbout'));

// Backup Admin Credentials
console.log(localStorage.getItem('leatherHeritageAdminCredentials'));
```

**Save the output to text files!**

### Restore Data

```javascript
// Replace YOUR_BACKUP_DATA with saved data
localStorage.setItem('leatherHeritageProducts', 'YOUR_BACKUP_DATA');
location.reload();
```

---

## 🐛 Troubleshooting

### Can't Login to Admin

**Check**:
- Using correct email (case-sensitive)
- Using correct password
- URL ends with `/admin`
- Clear browser cache

**Solution**:
- Use forgot password feature
- Check browser console for errors
- Try different browser

### Products Not Showing

**Check**:
- Products added through admin panel
- Correct category selected
- Browser localStorage not disabled

**Solution**:
- Refresh page
- Clear cache
- Re-add products

### Categories Not Updating

**Check**:
- Category saved successfully
- Page refreshed
- No duplicate names

**Solution**:
- Refresh admin panel
- Clear cache
- Check localStorage

### Images Not Loading

**Check**:
- Image URL is valid (HTTPS)
- Image file size (should be <2MB)
- Image format supported (JPG, PNG, WebP)

**Solution**:
- Use different image
- Compress large images
- Upload instead of URL

### Changes Not Saving

**Check**:
- Clicked "Save Changes" button
- No error messages
- Browser localStorage enabled

**Solution**:
- Try again
- Clear cache
- Check browser console

---

## 📱 Testing Checklist

Before going live:

- [ ] Changed admin password
- [ ] Updated contact information
- [ ] Wrote About Us content
- [ ] Added all products
- [ ] Created custom categories
- [ ] Tested on desktop
- [ ] Tested on tablet
- [ ] Tested on mobile
- [ ] Tested all forms
- [ ] Tested social media links
- [ ] Tested admin login
- [ ] Tested password change
- [ ] Tested forgot password
- [ ] Backed up data
- [ ] Replaced logo with your logo

---

## 🔄 Updating Your Site

### Content Updates (No Code)
1. Login to admin panel
2. Make changes
3. Save
4. Changes live immediately!

### Design Updates (Code Changes)
1. Edit files locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Deploy: `vercel --prod`

OR with GitHub:
1. Edit files
2. Commit changes
3. Push to GitHub
4. Auto-deploys!

---

## 📋 Project Structure

```
leather-heritage-v2/
├── src/
│   ├── App.jsx              # Main website component
│   ├── App.css              # Main website styles
│   ├── AdminPanel.jsx       # Admin panel with authentication
│   ├── Admin.css            # Admin panel styles
│   └── main.jsx             # Application entry point
├── public/
│   ├── logo.svg             # Website logo (SVG)
│   └── logo.png             # Website logo (PNG)
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Build configuration
├── vercel.json              # Vercel deployment config
├── README.md                # This file
├── QUICK_START.md           # Quick setup guide
├── ENHANCED_FEATURES_GUIDE.md  # Feature documentation
├── MIGRATION_GUIDE.md       # V1 to V2 upgrade guide
└── .gitignore               # Git ignore rules
```

---

## 🎯 Key Differences from V1

| Feature | V1 | V2 |
|---------|----|----|
| Admin Login | ❌ | ✅ |
| Password Management | ❌ | ✅ |
| About Us Page | ❌ | ✅ |
| Edit Contact Info | ❌ | ✅ |
| Custom Categories | ❌ | ✅ |
| Price Display | ✅ | ❌ |
| Tabbed Admin UI | ❌ | ✅ |
| Public Admin Access | ❌ | ✅ (secured) |

---

## 💡 Best Practices

### Security
1. Change default password immediately
2. Use strong passwords (12+ characters)
3. Change default secret code
4. Don't share admin credentials
5. Regular data backups

### Content
1. Use high-quality images
2. Compress images before upload
3. Keep descriptions clear and concise
4. Update About Us with your story
5. Keep contact info current

### Maintenance
1. Weekly: Check admin panel
2. Monthly: Backup data
3. Quarterly: Update content
4. As needed: Add new products
5. Regular: Test forms and links

---

## 📞 Support Resources

### Documentation
- Full guide: `README.md` (this file)
- Quick start: `QUICK_START.md`
- Features: `ENHANCED_FEATURES_GUIDE.md`
- Migration: `MIGRATION_GUIDE.md`

### External Resources
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev

---

## 🎊 You're All Set!

Your professional Leather Heritage website is ready with:

✅ Secure admin authentication
✅ Full content management
✅ Professional design
✅ Mobile responsive
✅ Easy to maintain
✅ Ready to deploy

### Next Steps

1. Complete local setup
2. Change admin credentials
3. Configure all content
4. Add your products
5. Test thoroughly
6. Deploy to Vercel
7. Share with the world!

---

## 📄 Version History

- **V2.0** (February 2026):
  - Added admin authentication
  - Added About Us page
  - Enhanced admin panel
  - Removed price display
  - Added category management
  - Added contact info editor
  - Improved UI/UX

- **V1.0** (February 2026):
  - Initial release
  - Basic website
  - Simple admin panel

---

**Developed with ❤️ for Leather Heritage**

**Version 2.0 - February 2026**

Comprehensive website solution with professional admin control and all requested enhancements.
