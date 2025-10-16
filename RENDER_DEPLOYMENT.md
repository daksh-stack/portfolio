# Render Deployment Guide

## Project Ready for Render Deployment ✅

Your portfolio project has been configured and is ready for Render deployment.

## Changes Made for Render:

1. **Created render.yaml**: Added Render configuration file with proper build settings
2. **Verified Build Scripts**: Confirmed package.json has correct build commands
3. **Node.js Version**: Specified Node.js 18.17.0 for Render compatibility
4. **Static Site Configuration**: Set up for static site deployment with SPA routing

## Render Deployment Steps:

### Option 1: Deploy via Render Dashboard (Recommended)

1. **Create Render Account**:
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

2. **Create New Static Site**:
   - Click "New +" button
   - Select "Static Site"

3. **Connect Repository**:
   - Connect your GitHub account
   - Select your portfolio repository
   - Choose the branch (usually `main` or `master`)

4. **Configure Build Settings**:
   - **Name**: `daksh-portfolio` (or your preferred name)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `18.17.0`

5. **Environment Variables** (if needed):
   - Add any environment variables your app needs
   - Prefix with `VITE_` for Vite environment variables

6. **Deploy**:
   - Click "Create Static Site"
   - Render will automatically build and deploy your app

### Option 2: Deploy via render.yaml (Infrastructure as Code)

1. **Push render.yaml to Repository**:
   - The `render.yaml` file is already created in your project
   - Commit and push to your repository

2. **Deploy from Dashboard**:
   - In Render dashboard, click "New +"
   - Select "Blueprint"
   - Connect your repository
   - Render will automatically detect and use the `render.yaml` configuration

## Configuration Details:

### render.yaml Configuration:
```yaml
services:
  - type: web
    name: daksh-portfolio
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
    envVars:
      - key: NODE_VERSION
        value: 18.17.0
```

### Key Settings Explained:
- **buildCommand**: Installs dependencies and builds the project
- **staticPublishPath**: Points to the `dist` directory (Vite's output)
- **routes**: Handles SPA routing by rewriting all routes to `index.html`
- **NODE_VERSION**: Ensures consistent Node.js version

## Build Configuration:
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.17.0

## Performance Optimizations:
- **Asset Caching**: Render automatically handles static asset caching
- **CDN**: Render provides global CDN for fast loading
- **Compression**: Automatic gzip compression enabled

## Custom Domain Setup:
1. **In Render Dashboard**:
   - Go to your site settings
   - Click "Custom Domains"
   - Add your domain

2. **DNS Configuration**:
   - Add a CNAME record pointing to your Render site URL
   - Or use Render's nameservers for full DNS management

## Environment Variables:
If you need environment variables:
- **Vite Variables**: Prefix with `VITE_` (e.g., `VITE_API_URL`)
- **Set in Render**: Go to Environment tab in your site settings
- **Access in Code**: Use `import.meta.env.VITE_VARIABLE_NAME`

## Monitoring and Updates:
- **Automatic Deployments**: Any push to your connected branch triggers a new deployment
- **Build Logs**: View build logs in Render dashboard
- **Performance**: Monitor site performance in Render dashboard

## Troubleshooting:

### Common Issues:
1. **Build Fails**:
   - Check build logs in Render dashboard
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

2. **404 on Refresh**:
   - Ensure the rewrite rule is configured (`/*` → `/index.html`)
   - Check that `render.yaml` has the correct routes configuration

3. **Assets Not Loading**:
   - Verify `staticPublishPath` is set to `dist`
   - Check that build command produces the `dist` directory

4. **Environment Variables Not Working**:
   - Ensure variables are prefixed with `VITE_`
   - Check that variables are set in Render dashboard

### Build Verification:
```bash
# Test build locally
npm install
npm run build

# Verify dist directory exists
ls -la dist/
```

## Render vs Vercel:
- **Render**: Better for full-stack apps, more configuration options
- **Vercel**: Optimized for frontend, faster deployments
- **Both**: Support static sites with SPA routing

Your portfolio is now ready for Render deployment! 🚀

## Next Steps:
1. **Commit all changes** to your repository
2. **Create Render account** and connect your repository
3. **Deploy using the dashboard** or `render.yaml` configuration
4. **Set up custom domain** (optional)
5. **Monitor deployment** and performance

The deployment should work seamlessly with the current configuration!
