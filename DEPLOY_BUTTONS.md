# One-Click Deployment Buttons

## ✅ Recommended Platforms

### 1. Vercel (Best for Next.js)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/vibe-main)

**Time**: 5 minutes | **Cost**: Free tier | **Rating**: ⭐⭐⭐⭐⭐

---

### 2. Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mk-knight23/vibe-main)

**Time**: 10 minutes | **Cost**: Free tier | **Rating**: ⭐⭐⭐⭐

---

### 3. Render
[Deploy to Render](https://render.com/deploy)

**Manual Steps**:
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub: `https://github.com/mk-knight23/vibe-main`
4. Configure and deploy

**Time**: 10 minutes | **Cost**: Free tier | **Rating**: ⭐⭐⭐⭐

---

### 4. Azure
[Deploy to Azure](https://portal.azure.com/#create/Microsoft.Template)

**Manual Steps**:
1. Install Azure CLI
2. Run deployment commands (see MULTI_PLATFORM_DEPLOY.md)

**Time**: 15 minutes | **Cost**: Pay-as-you-go | **Rating**: ⭐⭐⭐

---

## ⚠️ Limited Support Platforms

### GitHub Pages (Static Only)
```bash
npm run build
gh-pages -d out
```
**Note**: Most features won't work (no API routes, SSR, database)

---

### Firebase (Requires Cloud Run)
```bash
firebase init hosting
firebase deploy
```
**Note**: Requires Cloud Run for full features

---

## ❌ Not Compatible

- **CodeSandbox** - Development only
- **CodePen** - Frontend only
- **Replit** - Not production-ready
- **InfinityFree** - No Node.js support
- **AwardSpace** - No Node.js support

---

## 📋 Environment Variables Required

All platforms need these:

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
E2B_API_KEY=e2b_...
OPENROUTER_API_KEY=sk-or-v1-...
DEFAULT_PROVIDER=openrouter
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Get API Keys**: See QUICK_START.md

---

## 🎯 Which Platform Should I Choose?

### For Most Users:
**→ Vercel** (easiest, best Next.js support)

### For Enterprise:
**→ Azure** (scalability, compliance)

### For Budget:
**→ Render** (generous free tier)

### For Flexibility:
**→ Netlify** (good balance)

---

## 🚀 Quick Start

1. Click Vercel button above
2. Connect GitHub
3. Add environment variables
4. Deploy
5. Done in 5 minutes!

---

**Version**: 3.0.0  
**Status**: Ready to Deploy ✅
