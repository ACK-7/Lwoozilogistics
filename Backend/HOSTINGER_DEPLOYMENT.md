# Hostinger Laravel Deployment Troubleshooting Guide

## Common Issues & Solutions for Internal Server Error (500)

---

## ✅ **STEP 1: Update .env File for Production**

Your current `.env` is set for local development. Update these lines:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Update database credentials from Hostinger panel
DB_HOST=localhost
DB_DATABASE=your_hostinger_database_name
DB_USERNAME=your_hostinger_database_user
DB_PASSWORD=your_hostinger_database_password
```

**⚠️ IMPORTANT:** After uploading to Hostinger:

- Get database credentials from Hostinger's MySQL panel
- Replace localhost URL with your actual domain
- Set `APP_DEBUG=false` for security

---

## ✅ **STEP 2: Set Correct File Permissions**

SSH into your Hostinger server or use File Manager and run:

```bash
# Navigate to your Laravel root directory
cd /home/your-username/domains/yourdomain.com/public_html

# Set correct permissions for storage and cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache

# Set ownership (replace 'username' with your Hostinger username)
chown -R username:username storage
chown -R username:username bootstrap/cache
```

**Via File Manager:**

- Right-click `storage` folder → Permissions → Set to 775
- Right-click `bootstrap/cache` folder → Permissions → Set to 775

---

## ✅ **STEP 3: Configure Document Root**

In Hostinger, set your domain's document root to point to the `public` folder:

1. Go to **Hostinger Panel**
2. **Websites** → **Manage**
3. Find **Document Root** setting
4. Change from `/public_html` to `/public_html/public`

**Example:**

```
OLD: /home/username/domains/yourdomain.com/public_html
NEW: /home/username/domains/yourdomain.com/public_html/public
```

---

## ✅ **STEP 4: Create/Update .htaccess in Root**

If your hosting doesn't allow changing document root, create `.htaccess` in your **root directory** (not public):

Create file: `/public_html/.htaccess`

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

---

## ✅ **STEP 5: Clear All Caches**

SSH into server or use terminal:

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
```

If you can't access artisan, manually delete cache files:

```bash
rm -rf bootstrap/cache/*.php
rm -rf storage/framework/cache/*
rm -rf storage/framework/sessions/*
rm -rf storage/framework/views/*
```

---

## ✅ **STEP 6: Enable Error Logging**

To see actual errors, temporarily enable debugging:

**Option A: Via .env (be careful - only for testing)**

```env
APP_DEBUG=true
LOG_LEVEL=debug
```

**Option B: Check Laravel logs**

```bash
tail -f storage/logs/laravel.log
```

**Option C: Check Apache/PHP error logs**

- In Hostinger File Manager: `/home/username/logs/error_log`

---

## ✅ **STEP 7: Verify PHP Version**

In Hostinger Panel:

1. Go to **Advanced** → **PHP Configuration**
2. Select **PHP 8.4** (or latest 8.x)
3. Save changes

---

## ✅ **STEP 8: Install/Check Composer Dependencies**

SSH into your server:

```bash
cd /home/username/domains/yourdomain.com/public_html
composer install --optimize-autoloader --no-dev
```

---

## ✅ **STEP 9: Generate Application Key**

If `APP_KEY` is empty or you copied the project without `.env`:

```bash
php artisan key:generate
```

---

## ✅ **STEP 10: Run Migrations**

Once connected to database:

```bash
php artisan migrate --force
```

---

## 📋 **Deployment Checklist**

Upload these files/folders to Hostinger:

- ✅ `app/`
- ✅ `bootstrap/`
- ✅ `config/`
- ✅ `database/`
- ✅ `public/`
- ✅ `resources/`
- ✅ `routes/`
- ✅ `storage/` (with correct permissions)
- ✅ `vendor/` (or run composer install)
- ✅ `.env` (updated with production values)
- ✅ `artisan`
- ✅ `composer.json`
- ❌ **DO NOT** upload: `node_modules/`, `.git/`, `.env.example`

---

## 🔍 **Quick Diagnosis Commands**

```bash
# Check PHP version
php -v

# Check Laravel installation
php artisan --version

# Test database connection
php artisan tinker
>>> DB::connection()->getPdo();

# View last 20 lines of error log
tail -20 storage/logs/laravel.log
```

---

## 🆘 **Still Getting 500 Error?**

1. **Check storage/logs/laravel.log** - This will show the exact error
2. **Check Apache error logs** in Hostinger panel
3. **Temporarily set APP_DEBUG=true** to see error on screen
4. **Common issues:**
    - Missing `.env` file
    - Wrong database credentials
    - Storage folder not writable
    - Missing APP_KEY
    - Composer dependencies not installed
    - Document root not pointing to /public

---

## 📧 **After Fixing Errors**

Once your site is working:

1. Set `APP_DEBUG=false` for security
2. Set `APP_ENV=production`
3. Test the contact form
4. Verify email sending works

---

## 💡 **Pro Tips**

- Always keep a backup before making changes
- Use Hostinger's File Manager if SSH isn't available
- Check PHP error logs regularly
- Keep `APP_DEBUG=false` in production
- Use `.env` file, don't hardcode credentials

---

## Need More Help?

If you're still stuck, check:

1. **storage/logs/laravel.log** - Copy the error message
2. **Hostinger error logs** - /home/username/logs/error_log
3. Share the specific error message for targeted help
