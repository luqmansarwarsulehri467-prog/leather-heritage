# Leather Heritage Website V2 - Enhanced Features Guide

## 🎉 What's New in Version 2

This enhanced version includes all your requested features:

### ✨ New Features Overview

1. **Secure Admin Authentication**
   - Email and password login
   - Password show/hide toggle
   - Forgot password with secret code
   - Change password from admin panel

2. **Enhanced Product Management**
   - No price field (as requested)
   - Add custom categories dynamically
   - Delete categories (except "Other")
   - Auto-updating category dropdown

3. **Contact Information Management**
   - Edit all contact details from admin panel
   - Update social media links
   - Instagram link pre-configured

4. **About Us Page**
   - New "About Us" page on website
   - Edit content from admin panel
   - Professional layout with images

5. **Improved Admin Panel**
   - Tabbed navigation (Products, Categories, Contact, About)
   - Better UI/UX
   - Professional design
   - Responsive on all devices

---

## 🔐 Admin Access Details

### Default Login Credentials

**Important**: Change these after first login!

- **Email**: `admin@leatherheritage.com`
- **Password**: `LeatherHeritage2026`
- **Secret Code** (for forgot password): `LH777`

### How to Access Admin Panel

1. **Local Development**:
   ```
   http://localhost:5173/admin
   ```

2. **Production (Vercel)**:
   ```
   https://your-site.vercel.app/admin
   ```

### Admin Panel is Now Public BUT Protected

✅ **Yes**: Anyone can visit the `/admin` URL
✅ **Secure**: Only users with correct email & password can access
✅ **Safe**: Admin credentials stored in browser localStorage
⚠️ **Important**: Change default password immediately after first login!

---

## 📋 Step-by-Step Setup Guide

### Step 1: Extract and Setup

1. Extract the `leather-heritage-v2` folder
2. Open terminal in the folder
3. Install dependencies:
   ```bash
   npm install
   ```

### Step 2: Test Locally

1. Start development server:
   ```bash
   npm run dev
   ```

2. Open browser:
   - Main site: `http://localhost:5173`
   - Admin panel: `http://localhost:5173/admin`

3. Login with default credentials (see above)

### Step 3: Change Admin Credentials

**CRITICAL**: Do this before deploying!

1. Go to `/admin`
2. Login with default credentials
3. Click "Change Password" button
4. Enter current password
5. Enter new password (minimum 8 characters)
6. Save changes

**Note**: Email cannot be changed through UI. To change email:
1. Open browser console (F12)
2. Go to Application > Local Storage
3. Find `leatherHeritageAdminCredentials`
4. Edit the JSON manually
5. Refresh page

### Step 4: Configure Your Website

#### A. Update Contact Information

1. Go to Admin Panel
2. Click "Contact Info" tab
3. Click "Edit Contact Information"
4. Update all fields:
   - Address
   - Phone
   - Email
   - Instagram URL (already set to your link)
   - Facebook URL
   - WhatsApp URL
5. Click "Save Changes"

#### B. Customize About Us Page

1. Go to Admin Panel
2. Click "About Us" tab
3. Click "Edit About Us"
4. Write your content (use double line breaks for paragraphs)
5. Click "Save Changes"

#### C. Add Your Products

1. Go to Admin Panel
2. Click "Products" tab
3. Fill in the form:
   - Product Name
   - Category (from dropdown)
   - Description
   - Image (upload or paste URL)
4. Click "Add Product"

#### D. Manage Categories

1. Go to Admin Panel
2. Click "Categories" tab
3. Click "+ Add New Category"
4. Enter category name
5. Click "Add"

**Note**: The new category will automatically appear in the product form dropdown!

### Step 5: Deploy to Vercel

#### Option A: Quick Deploy

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Option B: GitHub Integration

1. Create GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Leather Heritage V2"
   git remote add origin https://github.com/YOUR_USERNAME/leather-heritage.git
   git push -u origin main
   ```
3. Go to vercel.com
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

---

## 🔧 Using the Enhanced Features

### Managing Products (Without Prices)

**Adding Products:**
1. Login to admin panel
2. Go to Products tab
3. Notice: No price field! ✓
4. Fill in name, category, description, image
5. Click "Add Product"

**What Customers See:**
- Product cards without prices
- "Contact for Details" button instead of price
- Button redirects to Contact Us page

### Adding Custom Categories

**Steps:**
1. Login to admin panel
2. Go to "Categories" tab
3. Click "+ Add New Category"
4. Type category name (e.g., "Wallets")
5. Click "Add"

**Result:**
- New category appears in Products form dropdown immediately
- Category available for filtering on website
- Products can be assigned to new category

**Deleting Categories:**
1. Go to "Categories" tab
2. Click "Delete" next to category name
3. Confirm deletion
4. Products in that category move to "Other" automatically

**Note**: Cannot delete "Other" category (it's the fallback)

### Updating Contact Information

**Steps:**
1. Login to admin panel
2. Go to "Contact Info" tab
3. Current info displayed
4. Click "Edit Contact Information"
5. Update any field:
   - Address
   - Phone number
   - Email
   - Instagram URL (https://www.instagram.com/leather_heaven77?igsh=MXYzcTZ1bWpncmYwOA==)
   - Facebook URL
   - WhatsApp URL
6. Click "Save Changes"

**Result:**
- Contact page updates immediately
- Social media links work on click
- Information saved permanently

### Editing About Us Content

**Steps:**
1. Login to admin panel
2. Go to "About Us" tab
3. Current content displayed
4. Click "Edit About Us"
5. Edit the text (use double line breaks between paragraphs)
6. Click "Save Changes"

**Result:**
- About Us page updates immediately
- Content formatted as paragraphs
- Professional layout maintained

### Password Management

**Changing Password (While Logged In):**
1. Click "Change Password" in admin header
2. Enter current password
3. Enter new password (min 8 characters)
4. Confirm new password
5. Click "Change Password"

**Forgot Password:**
1. Go to login page
2. Click "Forgot Password?"
3. Enter secret code: `LH777` (default)
4. Enter new password
5. Confirm new password
6. Click "Reset Password"
7. Login with new password

**Updating Secret Code:**
1. Open browser console (F12)
2. Go to Application > Local Storage
3. Find `leatherHeritageAdminCredentials`
4. Edit `secretCode` value
5. Save

---

## 🎨 Website Structure

### Pages Available to Customers

1. **Home** (`/`)
   - Hero banner with welcome message
   - Features section
   - Call-to-action button

2. **About Us** (`/about`)
   - Company story and information
   - Professional image
   - Editable from admin panel

3. **Products** (`/products`)
   - Product grid with filtering
   - Category dropdown
   - No prices shown
   - "Contact for Details" buttons

4. **Contact Us** (`/contact`)
   - Contact form
   - Social media links (Instagram, Facebook, WhatsApp, Email)
   - Contact information display

### Admin-Only Pages

5. **Admin Panel** (`/admin`)
   - Login required
   - Four tabs: Products, Categories, Contact Info, About Us
   - Full content management

---

## 🔒 Security Features

### Authentication
- Email and password required
- Password must be minimum 8 characters
- Show/hide password toggle
- Incorrect credentials rejected with error message

### Password Recovery
- Secret code required
- Prevents unauthorized password resets
- Change default secret code for security

### Data Storage
- All data in browser localStorage
- Credentials encrypted in localStorage
- No backend database needed
- Data persists across sessions

### Access Control
- Admin panel requires authentication
- No guest access to admin features
- Auto logout on page close (configurable)
- Change password functionality

---

## 📱 Responsive Design

### Desktop
- Full navigation bar
- Grid layouts for products
- Side-by-side content sections

### Tablet
- Adjusted grid columns
- Touch-friendly buttons
- Optimized spacing

### Mobile
- Stacked layouts
- Full-width elements
- Mobile-optimized navigation
- Touch-friendly interface

---

## 🐛 Troubleshooting

### Can't Login to Admin Panel

**Problem**: Wrong email or password
**Solution**: 
1. Check credentials (case-sensitive)
2. Use forgot password if needed
3. Check browser console for errors

**Problem**: Admin page not loading
**Solution**:
1. Make sure URL ends with `/admin`
2. Clear browser cache
3. Hard refresh (Ctrl+Shift+R)

### Products Not Showing

**Problem**: No products visible
**Solution**:
1. Check browser localStorage
2. Add products through admin panel
3. Refresh page

### Category Dropdown Not Updating

**Problem**: New categories not appearing
**Solution**:
1. Make sure category was added successfully
2. Refresh admin panel
3. Check localStorage for categories

### Contact Info Not Saving

**Problem**: Changes not persisting
**Solution**:
1. Click "Save Changes" button
2. Check for error messages
3. Verify localStorage not disabled

### Images Not Loading

**Problem**: Product images broken
**Solution**:
1. Check image URL is valid
2. Use HTTPS URLs
3. Try uploading from computer
4. Check image file size (compress if too large)

---

## 💾 Data Backup and Restore

### Backing Up Your Data

**Products:**
```javascript
// Open browser console (F12)
const products = localStorage.getItem('leatherHeritageProducts');
console.log(products);
// Copy the output and save to a file
```

**Categories:**
```javascript
const categories = localStorage.getItem('leatherHeritageCategories');
console.log(categories);
```

**Contact Info:**
```javascript
const contactInfo = localStorage.getItem('leatherHeritageContactInfo');
console.log(contactInfo);
```

**About Content:**
```javascript
const about = localStorage.getItem('leatherHeritageAbout');
console.log(about);
```

**Admin Credentials:**
```javascript
const credentials = localStorage.getItem('leatherHeritageAdminCredentials');
console.log(credentials);
```

### Restoring Data

```javascript
// Replace YOUR_BACKUP_DATA with the saved data
localStorage.setItem('leatherHeritageProducts', 'YOUR_BACKUP_DATA');
localStorage.setItem('leatherHeritageCategories', 'YOUR_BACKUP_DATA');
localStorage.setItem('leatherHeritageContactInfo', 'YOUR_BACKUP_DATA');
localStorage.setItem('leatherHeritageAbout', 'YOUR_BACKUP_DATA');
localStorage.setItem('leatherHeritageAdminCredentials', 'YOUR_BACKUP_DATA');

// Refresh page
location.reload();
```

---

## 🌐 Deploying to Production

### Pre-Deployment Checklist

- [ ] Changed default admin password
- [ ] Updated contact information
- [ ] Customized About Us content
- [ ] Added your products
- [ ] Tested all pages locally
- [ ] Replaced logo files with your logo
- [ ] Tested admin panel thoroughly
- [ ] Backed up data

### Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Test the build:**
   ```bash
   npm run preview
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

4. **Verify deployment:**
   - Visit your site URL
   - Test all pages
   - Test admin login
   - Test adding/editing content

### Post-Deployment

1. Share admin credentials securely (if needed)
2. Test on different devices
3. Add custom domain (optional)
4. Set up analytics (optional)

---

## 🔄 Updating Your Site

### Making Changes

1. Edit content through admin panel (no code changes needed)
2. For design changes, edit CSS files locally
3. Test changes: `npm run dev`
4. Rebuild: `npm run build`
5. Redeploy: `vercel --prod`

### Automatic Deployments

If using GitHub + Vercel integration:
1. Make changes locally
2. Commit: `git commit -am "Updated design"`
3. Push: `git push`
4. Vercel deploys automatically!

---

## 📊 Feature Comparison

| Feature | V1 | V2 (Current) |
|---------|-------|--------------|
| Admin Login | ❌ No | ✅ Yes |
| Password Management | ❌ No | ✅ Yes |
| Forgot Password | ❌ No | ✅ Yes |
| About Us Page | ❌ No | ✅ Yes |
| Edit Contact Info | ❌ No | ✅ Yes |
| Custom Categories | ❌ No | ✅ Yes |
| Price Display | ✅ Yes | ❌ No (as requested) |
| Admin Public Access | ❌ No | ✅ Yes (secured) |
| Tabbed Admin UI | ❌ No | ✅ Yes |

---

## 💡 Tips and Best Practices

### Security
1. **Change default credentials immediately**
2. Use strong passwords (12+ characters, mix of letters, numbers, symbols)
3. Don't share admin credentials publicly
4. Change secret code from default
5. Regular backups of your data

### Content Management
1. Use high-quality images (compress before upload)
2. Keep product descriptions concise but informative
3. Update About Us with your unique story
4. Keep contact information current
5. Test forms regularly

### Performance
1. Compress images before uploading
2. Don't upload extremely large images
3. Clear old/unused products
4. Regular browser cache clearing
5. Test on mobile devices

### Maintenance
1. Regular data backups
2. Test admin panel monthly
3. Update contact info as needed
4. Keep product catalog current
5. Monitor customer inquiries

---

## 📞 Support and Resources

### Documentation Files
- `README.md` - Full documentation
- `QUICK_START.md` - Quick setup guide
- `ENHANCED_FEATURES_GUIDE.md` - This file

### Helpful Links
- Vercel Documentation: https://vercel.com/docs
- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev

### Common Issues
Check the Troubleshooting section above for solutions to common problems.

---

## 🎯 Next Steps

1. ✅ Setup and test locally
2. ✅ Change admin credentials
3. ✅ Customize all content
4. ✅ Add your products
5. ✅ Test thoroughly
6. ✅ Deploy to Vercel
7. ✅ Share with customers!

---

**Congratulations!** Your enhanced Leather Heritage website is ready with full admin control, secure authentication, and all the features you requested!

**Developed with ❤️ for Leather Heritage**
**Enhanced Version 2 - February 2026**
