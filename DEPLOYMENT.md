# Deployment Guide for Plesk

This guide will help you deploy your Next.js application to Plesk hosting.

## Prerequisites

- Plesk panel access
- Node.js 18+ installed on your Plesk server
- SSH access (recommended) or Plesk File Manager

## Deployment Steps

### Method 1: Using Plesk Node.js Extension (Recommended)

1. **Access Plesk Panel**
   - Log in to your Plesk control panel
   - Navigate to your domain/subdomain

2. **Enable Node.js Application**
   - Go to **Node.js** in the Plesk panel
   - Click **Add Node.js App**
   - Set the following:
     - **Application root**: `/httpdocs` (or your preferred directory)
     - **Application URL**: `/` (for root) or `/subfolder` (for subfolder)
     - **Application startup file**: `server.js` (we'll create this)
     - **Node.js version**: 18.x or higher

3. **Upload Files**
   - Upload all project files to your domain directory (usually `/httpdocs`)
   - Or use Git deployment if available

4. **Install Dependencies**
   - In Plesk Node.js settings, click **NPM install**
   - Or run via SSH: `npm install --production`

5. **Build the Application**
   - In Node.js settings, run: `npm run build`
   - Or via SSH: `npm run build`

6. **Set Environment Variables**
   - In Node.js settings, add environment variable:
     - `NODE_ENV=production`
     - `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` (your actual domain)

7. **Start the Application**
   - Click **Run NPM start** in Plesk Node.js settings
   - Or set startup command: `npm start`

### Method 2: Using Git Deployment

1. **Set up Git Repository**
   - In Plesk, go to **Git**
   - Add your repository URL
   - Set deployment path

2. **Automatic Deployment**
   - Enable automatic deployment after push
   - Plesk will pull, install dependencies, build, and restart

### Method 3: Manual FTP/SFTP Upload

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload entire project folder via FTP/SFTP
   - Exclude `node_modules`, `.next`, `.git` (optional, faster upload)

3. **Install on Server**
   - SSH into your server
   - Navigate to uploaded directory
   - Run: `npm install --production`
   - Run: `npm run build` (if not built locally)

4. **Start Application**
   - Use process manager like PM2: `pm2 start npm --name "soncis" -- start`
   - Or set up as Plesk Node.js app (Method 1)

## Required Files for Deployment

- `package.json`
- `next.config.mjs`
- `.next` folder (after build)
- `public` folder
- All source files in `app`, `components`, `lib`

## Environment Variables

Set these in Plesk Node.js environment variables:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
PORT=3000
```

## Troubleshooting

### Port Configuration
- If using Node.js app in Plesk, it may use a different port
- Check Plesk Node.js settings for the assigned port
- Update your `package.json` start script if needed

### Build Errors
- Ensure Node.js 18+ is installed
- Check `npm install` completes without errors
- Verify all dependencies are installed

### Performance
- Enable compression in `next.config.mjs` (already enabled)
- Use CDN for static assets if available
- Enable caching in Plesk

## Post-Deployment Checklist

- [ ] Application builds successfully
- [ ] All routes work correctly
- [ ] Images load properly
- [ ] Cart and wishlist functionality works
- [ ] Environment variables are set
- [ ] SSL certificate is configured
- [ ] Domain points to correct application

## Support

For Plesk-specific issues, refer to:
- Plesk Node.js documentation
- Your hosting provider's support

