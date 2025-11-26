# Deployment Troubleshooting Guide

## ✅ Build Status: PASSING

Local build is successful. If you're seeing deployment errors, follow this guide.

---

## Common Deployment Errors

### 1. "Failed to collect page data for /api/generate"

**Cause**: Missing environment variables or build-time evaluation

**Solution**:
```typescript
// Already fixed in all routes:
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

**Verify**: All API routes are marked as dynamic (ƒ) in build output

---

### 2. Missing Environment Variables

**Error**: `Cannot read property 'X' of undefined`

**Solution**: Add all required environment variables to your deployment platform

**Required Variables**:
```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
E2B_API_KEY=e2b_...
OPENROUTER_API_KEY=sk-or-v1-...
DEFAULT_PROVIDER=openrouter
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

---

### 3. Database Connection Error

**Error**: `Can't reach database server`

**Solution**:
1. Verify `DATABASE_URL` is correct
2. Check SSL mode: `?sslmode=require`
3. Verify database is accessible from deployment platform
4. For Neon: Check connection pooling URL

**Example**:
```env
# Regular connection
DATABASE_URL=postgresql://user:pass@host.neon.tech/db?sslmode=require

# With pooling (recommended for production)
DATABASE_URL=postgresql://user:pass@host-pooler.neon.tech/db?sslmode=require&pgbouncer=true
```

---

### 4. Clerk Authentication Error

**Error**: `Clerk: Missing publishable key`

**Solution**:
1. Verify both Clerk keys are set
2. Use production keys (pk_live_... and sk_live_...)
3. Update Clerk dashboard URLs with your deployment URL

**Clerk Dashboard Settings**:
- Home URL: `https://your-app.vercel.app`
- Sign in URL: `https://your-app.vercel.app/sign-in`
- Sign up URL: `https://your-app.vercel.app/sign-up`

---

### 5. E2B Sandbox Error

**Error**: `E2B: Invalid API key`

**Solution**:
1. Verify `E2B_API_KEY` is set
2. Get key from: https://e2b.dev/dashboard
3. Ensure key starts with `e2b_`

---

### 6. Build Timeout

**Error**: `Build exceeded maximum duration`

**Solution**:
1. Upgrade to paid plan (if on free tier)
2. Optimize dependencies
3. Use build cache

**Vercel**: Increase timeout in project settings  
**Netlify**: Upgrade to Pro plan  
**Render**: Use Starter plan or higher

---

### 7. Module Not Found

**Error**: `Cannot find module 'X'`

**Solution**:
```bash
# Ensure all dependencies are installed
npm install

# Check package.json
npm run build  # Test locally first
```

---

## Platform-Specific Issues

### Vercel

**Issue**: Build fails on Vercel but works locally

**Solution**:
1. Check Node.js version (should be 18+)
2. Verify all environment variables are set
3. Check build logs for specific errors
4. Try redeploying

**Settings**:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node Version: 18.x

---

### Netlify

**Issue**: Next.js features not working

**Solution**:
1. Install Next.js plugin:
```bash
npm install -D @netlify/plugin-nextjs
```

2. Verify `netlify.toml` exists:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### Render

**Issue**: App crashes after deployment

**Solution**:
1. Check start command: `npm start`
2. Verify environment variables
3. Check logs for errors
4. Ensure Node.js 18+ is selected

---

### Azure

**Issue**: Deployment fails

**Solution**:
1. Verify App Service plan supports Node.js
2. Check deployment logs
3. Ensure all environment variables are set
4. Use correct runtime: `NODE:18-lts`

---

## Verification Checklist

Before deploying, verify:

- [ ] Local build passes: `npm run build`
- [ ] All environment variables documented
- [ ] Database connection string ready
- [ ] Clerk keys obtained (production)
- [ ] E2B API key obtained
- [ ] AI provider API key obtained
- [ ] All routes marked as dynamic (ƒ)
- [ ] No TypeScript errors
- [ ] Dependencies installed

---

## Testing Deployment

After deployment:

1. **Test Authentication**
   - Sign up
   - Sign in
   - Sign out

2. **Test Generation**
   - Create project
   - Generate website
   - Check preview

3. **Test Settings**
   - Open settings
   - Add API key
   - Validate key

4. **Test API Routes**
   - `/api/trpc/[trpc]` - Should return tRPC response
   - `/api/generate` - Should stream generation
   - `/api/validate-key` - Should validate keys

---

## Debug Commands

### Check Build Locally
```bash
npm run build
npm start
# Open http://localhost:3000
```

### Check Environment Variables
```bash
# Vercel
vercel env pull .env.local

# Netlify
netlify env:list

# Check if variables are set
echo $DATABASE_URL
```

### Check Logs
```bash
# Vercel
vercel logs

# Netlify
netlify logs

# Render
# Check dashboard logs
```

---

## Getting Help

### Build Logs
Always check build logs first:
- Vercel: Project → Deployments → Click deployment → View logs
- Netlify: Site → Deploys → Click deploy → Deploy log
- Render: Dashboard → Logs

### Common Log Patterns

**Missing env var**:
```
Error: Environment variable X is not defined
```
→ Add the variable in platform settings

**Database error**:
```
Error: Can't reach database server
```
→ Check DATABASE_URL and network access

**Module error**:
```
Error: Cannot find module 'X'
```
→ Run `npm install` and redeploy

---

## Quick Fixes

### Reset Deployment

**Vercel**:
```bash
vercel --prod --force
```

**Netlify**:
```bash
netlify deploy --prod --force
```

### Clear Build Cache

**Vercel**: Redeploy with "Clear cache and deploy"  
**Netlify**: Site settings → Build & deploy → Clear cache  
**Render**: Trigger manual deploy

### Rollback

**Vercel**: Deployments → Previous → Promote to Production  
**Netlify**: Deploys → Previous → Publish deploy  
**Render**: Not available (redeploy previous commit)

---

## Still Having Issues?

1. **Check GitHub Issues**: https://github.com/mk-knight23/vibe-main/issues
2. **Review Documentation**: See all .md files in repo
3. **Test Locally**: Ensure it works locally first
4. **Check Platform Status**: Verify platform isn't having issues

---

## Success Indicators

Deployment is successful when:
- ✅ Build completes without errors
- ✅ App loads at deployment URL
- ✅ Authentication works
- ✅ Can create projects
- ✅ Generation streams work
- ✅ Preview loads correctly

---

**Version**: 3.0.0  
**Last Updated**: November 26, 2025  
**Build Status**: ✅ PASSING
