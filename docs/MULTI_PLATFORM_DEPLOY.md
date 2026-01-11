# Multi-Platform Deployment Guide - Vibe v3.0.0

## ⚠️ Important: Platform Compatibility

Vibe uses **Next.js 15 with server-side features** (API routes, SSR, middleware). Not all platforms support this.

### ✅ Fully Compatible Platforms
1. **Vercel** - Best choice (native Next.js support)
2. **Netlify** - Full Next.js support
3. **Azure** - Via App Service or Static Web Apps
4. **Render** - Full Node.js support

### ⚠️ Limited/Not Compatible
- **GitHub Pages** - Static only (no server features)
- **CodeSandbox** - Development only
- **CodePen** - Frontend only
- **Replit** - Possible but limited
- **Firebase Hosting** - Static only (use Cloud Run for full app)
- **InfinityFree/AwardSpace** - No Node.js support

---

## 1. ✅ Vercel (Recommended - 5 minutes)

### Why Vercel?
- Native Next.js support
- Automatic deployments
- Edge functions
- Free tier available

### Deploy Steps:

**Option A: One-Click**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/vibe-main)

**Option B: CLI**
```bash
npm i -g vercel
vercel login
vercel
```

**Option C: Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Import: `https://github.com/mk-knight23/vibe-main`
3. Add environment variables
4. Deploy

### Environment Variables:
```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
E2B_API_KEY=e2b_...
OPENROUTER_API_KEY=sk-or-v1-...
DEFAULT_PROVIDER=openrouter
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Status**: ✅ Fully Supported

---

## 2. ✅ Netlify (10 minutes)

### Deploy Steps:

**Option A: One-Click**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mk-knight23/vibe-main)

**Option B: CLI**
```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**Option C: Dashboard**
1. Go to [netlify.com](https://netlify.com)
2. Import from GitHub
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy

### Netlify Configuration:

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  node_bundler = "esbuild"
```

**Status**: ✅ Fully Supported (with Next.js plugin)

---

## 3. ✅ Azure (15 minutes)

### Option A: Azure Static Web Apps

**Deploy Steps:**
```bash
# Install Azure CLI
brew install azure-cli  # macOS
# or download from https://aka.ms/installazurecliwindows

# Login
az login

# Create resource group
az group create --name vibe-rg --location eastus

# Create static web app
az staticwebapp create \
  --name vibe-app \
  --resource-group vibe-rg \
  --source https://github.com/mk-knight23/vibe-main \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location ".next"
```

### Option B: Azure App Service

**Deploy Steps:**
```bash
# Create App Service plan
az appservice plan create \
  --name vibe-plan \
  --resource-group vibe-rg \
  --sku B1 \
  --is-linux

# Create web app
az webapp create \
  --name vibe-app \
  --resource-group vibe-rg \
  --plan vibe-plan \
  --runtime "NODE:18-lts"

# Configure deployment
az webapp deployment source config \
  --name vibe-app \
  --resource-group vibe-rg \
  --repo-url https://github.com/mk-knight23/vibe-main \
  --branch main \
  --manual-integration

# Add environment variables
az webapp config appsettings set \
  --name vibe-app \
  --resource-group vibe-rg \
  --settings DATABASE_URL="..." CLERK_SECRET_KEY="..."
```

**Status**: ✅ Fully Supported

---

## 4. ✅ Render (10 minutes)

### Deploy Steps:

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Name**: vibe-app
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free or Starter

5. Add environment variables:
```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
E2B_API_KEY=e2b_...
OPENROUTER_API_KEY=sk-or-v1-...
DEFAULT_PROVIDER=openrouter
NEXT_PUBLIC_APP_URL=https://vibe-app.onrender.com
```

6. Deploy

**render.yaml** (optional):
```yaml
services:
  - type: web
    name: vibe-app
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 18
```

**Status**: ✅ Fully Supported

---

## 5. ⚠️ GitHub Pages (Static Export Only)

**Limitation**: GitHub Pages only supports static sites. You'll lose:
- API routes
- Server-side rendering
- Database features
- Authentication

### If You Still Want Static Export:

1. **Modify `next.config.ts`**:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

2. **Build**:
```bash
npm run build
```

3. **Deploy**:
```bash
# Install gh-pages
npm install -g gh-pages

# Deploy
gh-pages -d out
```

**Status**: ⚠️ Limited (Static only, most features won't work)

---

## 6. ⚠️ Firebase (Cloud Run Required)

### Option A: Firebase Hosting + Cloud Run

**Deploy Steps:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy to Cloud Run
firebase deploy --only hosting
```

**firebase.json**:
```json
{
  "hosting": {
    "source": ".",
    "frameworksBackend": {
      "region": "us-central1"
    }
  }
}
```

### Option B: Static Export (Limited)
```bash
# Build static
npm run build

# Deploy
firebase deploy --only hosting
```

**Status**: ⚠️ Requires Cloud Run for full features

---

## 7. ❌ Replit (Development Only)

**Limitation**: Replit is for development, not production.

### Setup for Development:

1. Go to [replit.com](https://replit.com)
2. Import from GitHub
3. Configure:
   - Language: Node.js
   - Run command: `npm run dev`

4. Add secrets (environment variables)

**Status**: ❌ Not recommended for production

---

## 8. ❌ CodeSandbox (Development Only)

**Limitation**: CodeSandbox is for prototyping, not production.

### Setup:
1. Go to [codesandbox.io](https://codesandbox.io)
2. Import from GitHub
3. It will auto-detect Next.js

**Status**: ❌ Development only

---

## 9. ❌ InfinityFree / AwardSpace (Not Compatible)

**Limitation**: These are PHP hosting providers without Node.js support.

**Alternative**: Use Vercel, Netlify, or Render (all have free tiers)

**Status**: ❌ Not compatible

---

## 10. ❌ CodePen (Not Compatible)

**Limitation**: CodePen is for frontend demos only, no backend support.

**Status**: ❌ Not compatible

---

## 📊 Platform Comparison

| Platform | Cost | Setup Time | Full Features | Recommended |
|----------|------|------------|---------------|-------------|
| **Vercel** | Free tier | 5 min | ✅ Yes | ⭐⭐⭐⭐⭐ |
| **Netlify** | Free tier | 10 min | ✅ Yes | ⭐⭐⭐⭐ |
| **Render** | Free tier | 10 min | ✅ Yes | ⭐⭐⭐⭐ |
| **Azure** | Pay-as-go | 15 min | ✅ Yes | ⭐⭐⭐ |
| **Firebase** | Free tier | 15 min | ⚠️ Limited | ⭐⭐ |
| **GitHub Pages** | Free | 5 min | ❌ Static only | ⭐ |
| **Replit** | Free tier | 5 min | ❌ Dev only | ⭐ |
| **Others** | N/A | N/A | ❌ No | ❌ |

---

## 🎯 Recommended Deployment Strategy

### For Production:
1. **Primary**: Vercel (best Next.js support)
2. **Backup**: Netlify or Render
3. **Enterprise**: Azure

### For Testing:
1. Vercel preview deployments
2. Netlify branch deploys

### Not Recommended:
- GitHub Pages (no server features)
- CodeSandbox/CodePen (dev only)
- InfinityFree/AwardSpace (no Node.js)
- Replit (not production-ready)

---

## 🚀 Quick Deploy Commands

### Vercel:
```bash
npx vercel --prod
```

### Netlify:
```bash
npx netlify-cli deploy --prod
```

### Render:
```bash
# Use dashboard - no CLI for initial setup
```

### Azure:
```bash
az webapp up --name vibe-app --runtime "NODE:18-lts"
```

---

## 📋 Pre-Deployment Checklist

- [ ] Environment variables configured
- [ ] Database connection string ready
- [ ] Clerk authentication setup
- [ ] E2B API key obtained
- [ ] AI provider API key ready
- [ ] Build successful locally
- [ ] All tests passing

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Test locally first
npm run build

# Check logs
vercel logs  # or netlify logs
```

### Environment Variables Missing
- Verify all required vars are set
- Check for typos
- Ensure no trailing spaces

### Database Connection Issues
- Verify connection string
- Check SSL mode
- Verify IP allowlist

---

## 💰 Cost Comparison

### Free Tiers:
- **Vercel**: 100GB bandwidth, 100 hours compute
- **Netlify**: 100GB bandwidth, 300 build minutes
- **Render**: 750 hours/month (free tier)
- **Azure**: $200 credit (first month)

### Paid Plans:
- **Vercel Pro**: $20/month
- **Netlify Pro**: $19/month
- **Render Starter**: $7/month
- **Azure**: Pay-as-you-go (~$10-50/month)

---

## ✅ Final Recommendation

**Deploy on Vercel** - It's the easiest, fastest, and best-supported platform for Next.js apps.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/vibe-main)

**Time to deploy**: 5 minutes  
**Cost**: Free tier available  
**Support**: Excellent  
**Performance**: Best

---

**Version**: 3.0.0  
**Last Updated**: November 26, 2025  
**Status**: Production Ready ✅
