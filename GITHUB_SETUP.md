# GitHub Repository Setup Guide

This document provides instructions for setting up this Next.js project as a GitHub repository.

## 1. Create a Repository on GitHub

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `governance-security-platform`
4. Add a description: "Powerhouse Governance & Security Platform landing page"
5. Choose visibility (public or private)
6. Do not initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## 2. Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands in your local project directory:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/governance-security-platform.git

# Verify the remote was added
git remote -v

# Push your local repository to GitHub
git push -u origin main
```

## 3. Configure GitHub Repository Settings

Once your code is pushed to GitHub, configure the following settings:

### Branch Protection

1. Go to Settings > Branches
2. Add rule for branch "main"
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass before merging (enable the CI workflow)
   - Require branches to be up to date before merging

### GitHub Pages (Optional)

For static site hosting:

1. Go to Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages (You'll need to set up deployment to this branch)
4. Click Save

### Environments (For Production Deployments)

1. Go to Settings > Environments
2. Create "Production" environment
3. Add environment secrets if needed (e.g., API keys)

## 4. Setting Up CI/CD with Vercel (Recommended)

For the best Next.js deployment experience:

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Import your repository
3. Configure project settings:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
   - Output Directory: Leave as default
4. Add environment variables from `.env.example` (with actual values)
5. Deploy

## 5. Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs) 