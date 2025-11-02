# Netlify Deployment Guide

Complete guide to deploy your Next.js Soncis application to Netlify.

## Prerequisites

- Netlify account (free tier available)
- GitHub, GitLab, or Bitbucket account (for automatic deployments)
- Or Netlify CLI installed (for manual deployment)

## Deployment Methods

### Method 1: Deploy via Netlify Dashboard (Recommended)

#### Step 1: Prepare Your Repository

1. **Push your code to Git repository**
   - Create a repository on GitHub, GitLab, or Bitbucket
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

#### Step 2: Connect to Netlify

1. **Go to Netlify Dashboard**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign in or create a free account

2. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18` (or latest)

#### Step 3: Install Netlify Next.js Plugin

The `netlify.toml` file already includes the plugin configuration. Netlify will automatically install `@netlify/plugin-nextjs` during build.

#### Step 4: Set Environment Variables

In Netlify Dashboard:
1. Go to **Site settings** → **Environment variables**
2. Add the following variables:

   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
   ```

   Replace `your-site-name` with your actual Netlify site name, or set your custom domain.

#### Step 5: Deploy

1. Click **Deploy site**
2. Netlify will:
   - Install dependencies (`npm install`)
   - Build your application (`npm run build`)
   - Deploy to their CDN

#### Step 6: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow Netlify's DNS configuration instructions

---

### Method 2: Deploy via Netlify CLI

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate.

#### Step 3: Initialize Site

```bash
netlify init
```

Follow the prompts to:
- Create a new site or link to existing site
- Set build command: `npm run build`
- Set publish directory: `.next`

#### Step 4: Set Environment Variables

```bash
netlify env:set NODE_ENV production
netlify env:set NEXT_PUBLIC_SITE_URL https://your-site.netlify.app
```

#### Step 5: Deploy

```bash
netlify deploy --prod
```

For draft deployments (not production):
```bash
netlify deploy
```

---

### Method 3: Drag & Drop (Quick Test)

1. **Build locally first**
   ```bash
   npm run build
   ```

2. **Zip the `.next` folder and `public` folder**
   - Create a zip file containing:
     - `.next` folder
     - `public` folder
     - `package.json`
     - `netlify.toml`

3. **Drag and drop to Netlify**
   - Go to Netlify Dashboard
   - Drag the zip file to the deploy area

**Note**: This method doesn't support automatic deployments and is mainly for quick testing.

---

## Configuration Files

### netlify.toml

The `netlify.toml` file is already configured with:
- Build command and publish directory
- Next.js plugin configuration
- Redirect rules for Next.js routing
- Security headers
- Cache control for static assets

### Environment Variables

Required environment variables:
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL` - Your Netlify site URL or custom domain

Optional:
- Any other environment variables your app needs

---

## Build Settings Summary

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | `18` |
| Plugin | `@netlify/plugin-nextjs` |

---

## Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Cart functionality works
- [ ] Wishlist functionality works
- [ ] Environment variables are set
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is active (automatic with Netlify)

---

## Continuous Deployment

Once connected to Git, Netlify automatically deploys:
- **Production**: Every push to `main` or `master` branch
- **Branch previews**: Deploy previews for pull requests

### Deploy Contexts

You can configure different settings for different branches:
- Production branch: `main` or `master`
- Deploy previews: Pull requests
- Branch deploys: Other branches

---

## Troubleshooting

### Build Fails

1. **Check build logs** in Netlify Dashboard
2. **Verify Node version**: Ensure Node 18+ is used
3. **Check dependencies**: Ensure all dependencies are in `package.json`
4. **Verify build command**: Should be `npm run build`

### 404 Errors on Routes

- The `netlify.toml` already includes redirect rules
- Ensure `@netlify/plugin-nextjs` is installed (happens automatically)

### Environment Variables Not Working

- Restart deploy after adding variables
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Check variable names match exactly

### Images Not Loading

- Verify `public` folder is included in deployment
- Check image paths are correct
- Ensure Next.js Image optimization is working

---

## Performance Optimization

Netlify automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Static asset caching
- ✅ Edge functions support

---

## Monitoring

- **Deploy logs**: View in Netlify Dashboard
- **Analytics**: Available in Netlify Dashboard (paid feature)
- **Form handling**: Built-in form handling (if needed)

---

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify Guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Netlify Community](https://answers.netlify.com/)

---

## Quick Commands Reference

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod

# Deploy draft
netlify deploy

# View site info
netlify status

# Open site in browser
netlify open
```

---

## Next Steps After Deployment

1. **Set up custom domain** (optional)
2. **Configure form handling** (if using forms)
3. **Set up analytics** (if needed)
4. **Enable branch previews** for pull requests
5. **Configure environment variables** for different contexts

Your Soncis application is now ready for Netlify deployment! 🚀

