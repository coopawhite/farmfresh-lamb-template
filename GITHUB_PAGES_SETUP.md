# GitHub Pages Setup Guide

## Overview

This document explains how your React/Vite application is configured for GitHub Pages deployment with proper routing support.

## Repository Configuration

- **Repository Name**: `farmfresh-lamb-template`
- **GitHub Pages URL**: `https://[your-username].github.io/farmfresh-lamb-template/`
- **Base Path**: `/farmfresh-lamb-template/`

## Key Configuration Changes Made

### 1. Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig(({ mode, command }) => ({
  // Set base path for GitHub Pages deployment
  base: command === 'build' ? process.env.BASE_PATH || '/' : '/',
  // ... rest of config
}));
```

**What this does:**
- During development (`npm run dev`): Uses base path `/` for local development
- During build (`npm run build`): Uses `BASE_PATH` environment variable set by GitHub Actions
- Ensures `import.meta.env.BASE_URL` is correctly set for React Router

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
- name: Determine base path for GitHub Pages
  run: |
    REPO_NAME="${GITHUB_REPOSITORY#*/}"
    if [[ "$REPO_NAME" == *.github.io ]]; then
      echo "BASE_PATH=/" >> $GITHUB_ENV
    else
      echo "BASE_PATH=/$REPO_NAME/" >> $GITHUB_ENV
    fi

- name: Build site
  run: BASE_PATH="${BASE_PATH}" npm run build
  env:
    BASE_PATH: ${{ env.BASE_PATH }}
```

**What this does:**
- Automatically detects if you're using a user/org site (*.github.io) or project site
- Sets the correct base path: `/` for user sites, `/repo-name/` for project sites
- Passes the base path to Vite during build

### 3. React Router Configuration (`src/App.tsx`)

```typescript
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

**What this does:**
- Uses the base URL set by Vite configuration
- Ensures all routes work correctly with the repository subdirectory
- Maintains clean URLs (no hash routing)

### 4. Asset Resolution (`src/pages/Index.tsx`)

```typescript
// Fixed asset URLs in structured data
image: [
  new URL(lambDishes, window.location.origin + import.meta.env.BASE_URL).toString(),
  new URL(farmers, window.location.origin + import.meta.env.BASE_URL).toString()
],

// Fixed canonical URL
canonical={window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, '')}
```

**What this does:**
- Ensures images and canonical URLs include the correct base path
- Fixes SEO metadata for proper indexing

### 5. TypeScript Support (`src/vite-env.d.ts`)

```typescript
interface ImportMetaEnv {
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

**What this does:**
- Provides proper TypeScript support for `import.meta.env.BASE_URL`
- Eliminates TypeScript errors

## How to Test the Deployment

### 1. Local Testing with Base Path

To test locally with the same base path as production:

```bash
# Test with production base path
BASE_PATH="/farmfresh-lamb-template/" npm run build
npm run preview
```

Then visit: `http://localhost:4173/farmfresh-lamb-template/`

### 2. Deploy to GitHub Pages

1. **Push your changes to the main branch:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages routing configuration"
   git push origin main
   ```

2. **Monitor the GitHub Action:**
   - Go to your repository on GitHub
   - Click the "Actions" tab
   - Watch the "Deploy Vite site to GitHub Pages" workflow

3. **Enable GitHub Pages (if not already enabled):**
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" (created by the action)
   - Folder: "/ (root)"

### 3. Verify the Deployment

Once deployed, test these URLs:

- **Home page**: `https://[username].github.io/farmfresh-lamb-template/`
- **Direct navigation**: Should work without 404 errors
- **Browser refresh**: Should work on any page
- **Assets**: Images and styles should load correctly

## Troubleshooting

### Common Issues and Solutions

1. **404 Error on Direct Navigation**
   - **Cause**: Base path not configured correctly
   - **Solution**: Verify the GitHub Action sets `BASE_PATH` correctly

2. **Assets Not Loading**
   - **Cause**: Asset URLs don't include base path
   - **Solution**: Check that assets use `import.meta.env.BASE_URL`

3. **Blank Page**
   - **Cause**: JavaScript errors due to incorrect paths
   - **Solution**: Check browser console for errors

4. **Routing Issues**
   - **Cause**: React Router basename not set correctly
   - **Solution**: Verify `basename={import.meta.env.BASE_URL}` in BrowserRouter

### Debug Commands

```bash
# Check what BASE_URL is set to during build
echo "BASE_URL: $BASE_URL"

# Build with verbose output
npm run build -- --debug

# Test locally with base path
BASE_PATH="/farmfresh-lamb-template/" npm run build && npm run preview
```

## Repository Settings Required

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "gh-pages"
4. Folder: "/ (root)"

### Action Permissions

Ensure the repository has these permissions:
- Settings → Actions → General → Workflow permissions: "Read and write permissions"
- Settings → Pages → Build and deployment: "GitHub Actions"

## URL Structure

- **Development**: `http://localhost:8080/`
- **Production**: `https://[username].github.io/farmfresh-lamb-template/`
- **All routes work**: `/`, and any future routes you add

## Next Steps

1. **Custom Domain (Optional)**: You can add a custom domain in repository Settings → Pages
2. **HTTPS**: GitHub Pages automatically provides HTTPS
3. **CDN**: GitHub Pages includes global CDN for fast loading

Your site should now be fully functional on GitHub Pages with proper routing support!