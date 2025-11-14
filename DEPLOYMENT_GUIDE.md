# Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Update the Base URL

Before deploying, update the `base` property in `vite.config.ts` to match your GitHub repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/',  // Change this!
  build: {
    outDir: 'dist',
  },
})
```

**Important**: The repository name is case-sensitive and must match exactly!

### 2. Customize Your Portfolio

Edit `src/data/portfolio.ts` to add your own:
- Projects
- Work experience
- Education
- Skills
- Contact information

Replace placeholder images with your own photos and project screenshots.

### 3. Initialize Git Repository

If you haven't already initialized a git repository:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio setup"
```

### 4. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Name it whatever you like** (e.g., "Portfolio", "my-portfolio", etc.)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

### 5. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**

### 7. Deploy

The GitHub Actions workflow will automatically:
- Build your portfolio
- Deploy it to GitHub Pages

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

The deployment usually takes 2-5 minutes.

## Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

## Troubleshooting

### Issue: Pages not loading / 404 errors

**Solution**: Make sure the `base` in `vite.config.ts` matches your repository name exactly (case-sensitive):

```typescript
base: '/Repository-Name/',  // Must match exactly!
```

### Issue: Routes not working (e.g., /project/id)

**Solution**: This is already handled! We use HashRouter which works perfectly with GitHub Pages. URLs will look like:
- `https://username.github.io/repo/#/`
- `https://username.github.io/repo/#/project/id`

### Issue: Images not loading

**Solution**:
1. Make sure images are in the `public` folder or imported in components
2. Use absolute URLs for external images (already implemented in the template)

### Issue: GitHub Actions workflow failing

**Solution**:
1. Check the Actions tab in your GitHub repository
2. Look at the error logs
3. Common fixes:
   - Make sure all dependencies are in `package.json`
   - Ensure there are no TypeScript errors
   - Run `npm run build` locally to test

### Issue: CSS not applying

**Solution**: Clear your browser cache or open in incognito mode. GitHub Pages can cache aggressively.

## Custom Domain (Optional)

If you want to use a custom domain (e.g., www.yourname.com):

1. Update `vite.config.ts`:
```typescript
base: '/',  // Root path for custom domain
```

2. In your GitHub repository settings > Pages:
   - Add your custom domain
   - Enable "Enforce HTTPS"

3. Update your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

## Local Testing

Before deploying, you can test the production build locally:

```bash
npm run build
npm run preview
```

This will start a local server with the production build.

## CI/CD Workflow

The `.github/workflows/deploy.yml` file handles automatic deployment:

- **Triggers**: Pushes to `main` branch
- **Process**:
  1. Checks out code
  2. Sets up Node.js
  3. Installs dependencies
  4. Builds the project
  5. Deploys to GitHub Pages

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router with GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

## Getting Help

If you encounter issues:
1. Check the troubleshooting section above
2. Review the build logs in GitHub Actions
3. Test the build locally with `npm run build`
4. Make sure your Node version matches the one in the workflow (v20)

Good luck with your portfolio! 🚀
