# Deployment Guide - Vibe v3.0.0

Complete guide for deploying Vibe to production.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works)
- PostgreSQL database (Neon recommended)
- Clerk account (free tier)
- E2B account
- At least one AI provider API key

### Step 1: Prepare Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Upgrade to v3.0.0"
git push origin main
```

### Step 2: Setup External Services

#### A. Database (Neon PostgreSQL)

1. Go to [Neon](https://neon.tech)
2. Create new project
3. Copy connection string
4. Format: `postgresql://user:password@host.neon.tech/dbname?sslmode=require`

#### B. Authentication (Clerk)

1. Go to [Clerk](https://clerk.com)
2. Create new application
3. Copy API keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Configure redirect URLs:
   - Sign in: `/sign-in`
   - Sign up: `/sign-up`
   - After sign in: `/`
   - After sign up: `/`

#### C. Sandbox (E2B)

1. Go to [E2B](https://e2b.dev)
2. Create account
3. Get API key: `E2B_API_KEY`

#### D. AI Provider (Choose One or More)

**OpenRouter (Recommended - Free Models)**
1. Go to [OpenRouter](https://openrouter.ai)
2. Create account
3. Get API key: `OPENROUTER_API_KEY`
4. Free models: Grok, DeepSeek, Qwen, Gemini

**Routeway (Free Models)**
1. Go to [Routeway](https://routeway.ai)
2. Get API key: `ROUTEWAY_API_KEY`
3. Free models: Kimi, GLM, DeepSeek, Llama

**MegaLLM (Paid)**
1. Go to [MegaLLM](https://megallm.io)
2. Get API key: `MEGALLM_API_KEY`
3. Cost: ~$0.07/M tokens

**AgentRouter (Intelligent Routing)**
1. Go to [AgentRouter](https://agentrouter.org)
2. Get API key: `AGENTROUTER_API_KEY`

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Add Environment Variables:

```env
# Database
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# E2B Sandbox
E2B_API_KEY=e2b_...

# App URL (will be provided by Vercel)
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app

# AI Provider (at least one)
OPENROUTER_API_KEY=sk-or-v1-...
# ROUTEWAY_API_KEY=sk-...
# MEGALLM_API_KEY=sk-mega-...
# AGENTROUTER_API_KEY=sk-...

# Default Provider
DEFAULT_PROVIDER=openrouter
```

6. Click "Deploy"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts and add environment variables
```

### Step 4: Post-Deployment Setup

#### A. Run Database Migrations

```bash
# Using Vercel CLI
vercel env pull .env.local
npx prisma migrate deploy

# Or connect to production database directly
DATABASE_URL="your-production-url" npx prisma migrate deploy
```

#### B. Update Clerk URLs

1. Go to Clerk Dashboard
2. Navigate to "Paths"
3. Update with your Vercel URL:
   - Home URL: `https://your-app.vercel.app`
   - Sign in URL: `https://your-app.vercel.app/sign-in`
   - Sign up URL: `https://your-app.vercel.app/sign-up`

#### C. Update NEXT_PUBLIC_APP_URL

1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Update `NEXT_PUBLIC_APP_URL` with your deployment URL
4. Redeploy

### Step 5: Verify Deployment

1. **Test Authentication**
   - Visit your app
   - Sign up/Sign in
   - Verify redirect works

2. **Test Generation**
   - Create new project
   - Enter prompt
   - Verify streaming works
   - Check preview loads

3. **Test Settings**
   - Open settings dialog
   - Add API key
   - Validate key
   - Test generation

## 🔧 Advanced Configuration

### Custom Domain

1. Go to Vercel Dashboard
2. Project Settings → Domains
3. Add your domain
4. Update DNS records
5. Update `NEXT_PUBLIC_APP_URL`
6. Update Clerk URLs

### Environment-Specific Variables

```bash
# Development
vercel env add VARIABLE_NAME development

# Preview
vercel env add VARIABLE_NAME preview

# Production
vercel env add VARIABLE_NAME production
```

### Database Connection Pooling

For production, use connection pooling:

```env
# Neon with pooling
DATABASE_URL=postgresql://user:password@host-pooler.neon.tech/dbname?sslmode=require&pgbouncer=true
```

### Edge Runtime Configuration

Already configured in `next.config.ts`:

```typescript
export default {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}
```

## 🔒 Security Checklist

- [ ] All API keys are in environment variables
- [ ] No secrets in code
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Clerk authentication configured
- [ ] Rate limiting enabled
- [ ] CORS configured properly
- [ ] Database uses SSL
- [ ] Environment variables are production values

## 📊 Monitoring

### Vercel Analytics

1. Go to Vercel Dashboard
2. Enable Analytics
3. View real-time metrics

### Error Tracking

Built-in error boundaries catch and log errors.

### Performance Monitoring

- Use Vercel Speed Insights
- Monitor Core Web Vitals
- Check function execution times

## 🐛 Troubleshooting

### Build Fails

```bash
# Check build logs in Vercel
# Common issues:
- Missing environment variables
- TypeScript errors
- Dependency issues

# Fix:
vercel logs
npm run build # Test locally
```

### Database Connection Issues

```bash
# Verify connection string
# Check SSL mode
# Verify IP allowlist (Neon)

# Test connection:
npx prisma db push
```

### Authentication Issues

```bash
# Verify Clerk keys
# Check redirect URLs
# Verify domain configuration

# Test locally:
npm run dev
```

### Generation Not Working

```bash
# Check AI provider API key
# Verify E2B API key
# Check rate limits
# Review function logs
```

## 🔄 Updates and Maintenance

### Update Dependencies

```bash
npm update
npm audit fix
git commit -am "Update dependencies"
git push
```

### Database Migrations

```bash
# Create migration
npx prisma migrate dev --name migration_name

# Deploy to production
DATABASE_URL="production-url" npx prisma migrate deploy
```

### Rollback Deployment

```bash
# Via Vercel Dashboard
# Deployments → Previous deployment → Promote to Production

# Via CLI
vercel rollback
```

## 📈 Scaling

### Vercel Pro Features

- Increased function execution time
- More bandwidth
- Team collaboration
- Advanced analytics

### Database Scaling

- Neon autoscaling
- Connection pooling
- Read replicas
- Backup strategies

### CDN and Caching

- Automatic with Vercel
- Edge caching
- Static asset optimization

## 💰 Cost Estimation

### Free Tier (Hobby)
- Vercel: Free
- Neon: Free (0.5GB storage)
- Clerk: Free (10k MAU)
- E2B: Free tier available
- OpenRouter: Free models available

### Production (Pro)
- Vercel Pro: $20/month
- Neon Pro: $19/month
- Clerk Pro: $25/month
- E2B: Pay as you go
- AI Providers: Varies

## 🆘 Support

- **Issues**: GitHub Issues
- **Docs**: README.md
- **Community**: GitHub Discussions

---

**Version**: 3.0.0  
**Last Updated**: 2025-11-26  
**Status**: Production Ready ✅
