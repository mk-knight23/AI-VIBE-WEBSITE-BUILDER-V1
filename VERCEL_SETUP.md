# Vercel Deployment Setup - Vibe v3.0.0

## 🎯 Quick Start (5 Minutes)

### Step 1: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import: `https://github.com/mk-knight23/vibe-main`
4. Click "Import"

### Step 2: Configure Project

**Framework Preset**: Next.js (auto-detected)  
**Root Directory**: `./`  
**Build Command**: `npm run build` (default)  
**Output Directory**: `.next` (default)  
**Install Command**: `npm install` (default)

### Step 3: Add Environment Variables

Click "Environment Variables" and add these:

#### Required Variables

```env
# Database (Get from Neon.tech)
DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/vibe?sslmode=require

# Clerk Auth (Get from clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx
CLERK_SECRET_KEY=sk_live_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# E2B Sandbox (Get from e2b.dev)
E2B_API_KEY=e2b_xxx

# AI Provider - Choose at least ONE
OPENROUTER_API_KEY=sk-or-v1-xxx
# ROUTEWAY_API_KEY=sk-xxx
# MEGALLM_API_KEY=sk-mega-xxx
# AGENTROUTER_API_KEY=sk-xxx

# Default Provider
DEFAULT_PROVIDER=openrouter

# App URL (Update after first deploy)
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes
3. Copy your deployment URL

### Step 5: Post-Deployment

#### A. Update App URL

1. Go to Project Settings → Environment Variables
2. Edit `NEXT_PUBLIC_APP_URL`
3. Set to your Vercel URL: `https://your-app.vercel.app`
4. Click "Save"
5. Redeploy (Deployments → Latest → Redeploy)

#### B. Update Clerk URLs

1. Go to [clerk.com](https://clerk.com) dashboard
2. Select your application
3. Go to "Paths" section
4. Update:
   - **Home URL**: `https://your-app.vercel.app`
   - **Sign in URL**: `https://your-app.vercel.app/sign-in`
   - **Sign up URL**: `https://your-app.vercel.app/sign-up`
   - **After sign in**: `/`
   - **After sign up**: `/`

#### C. Run Database Migration

```bash
# Option 1: Using Vercel CLI
npm i -g vercel
vercel login
vercel env pull .env.local
npx prisma migrate deploy

# Option 2: Direct connection
DATABASE_URL="your-production-url" npx prisma migrate deploy
```

## 🔑 Getting API Keys

### 1. Database (Neon) - FREE

1. Go to [neon.tech](https://neon.tech)
2. Sign up with GitHub
3. Click "Create Project"
4. Name: `vibe-production`
5. Region: Choose closest to you
6. Click "Create Project"
7. Copy connection string from dashboard
8. Format: `postgresql://user:password@host.neon.tech/dbname?sslmode=require`

### 2. Authentication (Clerk) - FREE

1. Go to [clerk.com](https://clerk.com)
2. Sign up
3. Click "Add Application"
4. Name: `Vibe Production`
5. Choose authentication methods (Email, Google, GitHub)
6. Click "Create Application"
7. Copy API keys from dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

### 3. Sandbox (E2B) - FREE TIER

1. Go to [e2b.dev](https://e2b.dev)
2. Sign up with GitHub
3. Go to "API Keys"
4. Click "Create API Key"
5. Copy: `E2B_API_KEY`

### 4. AI Provider - Choose ONE (FREE OPTIONS)

#### OpenRouter (Recommended) - FREE MODELS

1. Go to [openrouter.ai](https://openrouter.ai)
2. Sign up
3. Go to "Keys"
4. Click "Create Key"
5. Copy: `OPENROUTER_API_KEY`
6. **Free Models**: Grok, DeepSeek, Qwen, Gemini

#### Routeway - FREE MODELS

1. Go to [routeway.ai](https://routeway.ai)
2. Sign up
3. Get API key
4. Copy: `ROUTEWAY_API_KEY`
5. **Free Models**: Kimi, GLM, DeepSeek, Llama

#### MegaLLM - PAID ($0.07/M tokens)

1. Go to [megallm.io](https://megallm.io)
2. Sign up
3. Add credits
4. Get API key: `MEGALLM_API_KEY`

#### AgentRouter - INTELLIGENT ROUTING

1. Go to [agentrouter.org](https://agentrouter.org)
2. Sign up
3. Go to Console → Token
4. Copy: `AGENTROUTER_API_KEY`

## ✅ Verification Checklist

After deployment, verify:

- [ ] App loads at your Vercel URL
- [ ] Sign up works
- [ ] Sign in works
- [ ] Redirects work correctly
- [ ] Settings dialog opens
- [ ] Can add API key
- [ ] API key validates
- [ ] Can create project
- [ ] Generation streams in real-time
- [ ] Preview loads correctly
- [ ] Can view project history

## 🐛 Common Issues

### Build Fails

**Error**: Missing environment variables

**Fix**:
1. Check all required variables are set
2. Verify no typos in variable names
3. Redeploy

### Database Connection Error

**Error**: Can't connect to database

**Fix**:
1. Verify `DATABASE_URL` is correct
2. Check SSL mode: `?sslmode=require`
3. Run migrations: `npx prisma migrate deploy`
4. Check Neon dashboard for connection issues

### Authentication Not Working

**Error**: Redirect loop or auth fails

**Fix**:
1. Verify Clerk keys are correct
2. Update Clerk URLs with your Vercel domain
3. Check redirect URLs match exactly
4. Clear browser cache and cookies

### Generation Fails

**Error**: Generation doesn't start

**Fix**:
1. Verify AI provider API key is valid
2. Check E2B API key
3. Test API key in settings
4. Check Vercel function logs
5. Verify rate limits not exceeded

### Preview Not Loading

**Error**: Blank preview or errors

**Fix**:
1. Check browser console for errors
2. Verify E2B sandbox is running
3. Check function execution logs
4. Try regenerating

## 📊 Monitoring

### View Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click "Logs"
4. Filter by:
   - Function logs
   - Build logs
   - Static logs

### Analytics

1. Enable Vercel Analytics
2. View real-time metrics
3. Monitor Core Web Vitals
4. Track user behavior

### Error Tracking

Built-in error boundaries log to console. For production:

1. Consider Sentry integration
2. Monitor function errors
3. Set up alerts

## 🔒 Security Best Practices

- ✅ All secrets in environment variables
- ✅ Never commit `.env.local`
- ✅ Use production API keys
- ✅ Enable Vercel's security headers
- ✅ Keep dependencies updated
- ✅ Monitor for vulnerabilities
- ✅ Use HTTPS only (automatic)
- ✅ Enable rate limiting (built-in)

## 🚀 Performance Optimization

### Already Configured

- ✅ Edge runtime for API routes
- ✅ Image optimization
- ✅ Automatic code splitting
- ✅ Static asset caching
- ✅ Gzip compression

### Additional Optimizations

1. **Enable Vercel Speed Insights**
   - Go to Project Settings
   - Enable Speed Insights
   - Monitor performance

2. **Configure Caching**
   - Already optimized for Next.js
   - Static pages cached at edge
   - API routes use appropriate headers

3. **Database Connection Pooling**
   ```env
   DATABASE_URL=postgresql://user:password@host-pooler.neon.tech/dbname?sslmode=require&pgbouncer=true
   ```

## 💰 Cost Breakdown

### Free Tier (Perfect for Testing)

- **Vercel**: Free (Hobby)
  - 100GB bandwidth
  - 100 hours function execution
  - Unlimited deployments

- **Neon**: Free
  - 0.5GB storage
  - 1 project
  - Autoscaling

- **Clerk**: Free
  - 10,000 MAU
  - All features

- **E2B**: Free tier
  - Limited executions
  - Upgrade as needed

- **OpenRouter**: Free models
  - Grok, DeepSeek, Qwen
  - Rate limited

**Total**: $0/month

### Production (Recommended)

- **Vercel Pro**: $20/month
  - Unlimited bandwidth
  - 1000 hours function execution
  - Team features

- **Neon Pro**: $19/month
  - 10GB storage
  - Autoscaling
  - Point-in-time recovery

- **Clerk Pro**: $25/month
  - 10,000 MAU included
  - Advanced features

- **E2B**: Pay as you go
  - ~$10-50/month depending on usage

- **AI Provider**: Varies
  - OpenRouter: Pay per use
  - MegaLLM: ~$0.07/M tokens

**Total**: ~$75-100/month

## 🔄 Updates

### Update Code

```bash
git pull origin main
git push origin main
# Vercel auto-deploys
```

### Update Dependencies

```bash
npm update
npm audit fix
git commit -am "Update dependencies"
git push
```

### Update Environment Variables

1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Edit or add variables
4. Redeploy if needed

## 🆘 Support

- **Documentation**: README.md, CHANGELOG.md
- **Issues**: [GitHub Issues](https://github.com/mk-knight23/vibe-main/issues)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

## 📞 Quick Links

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Neon Console**: [console.neon.tech](https://console.neon.tech)
- **Clerk Dashboard**: [dashboard.clerk.com](https://dashboard.clerk.com)
- **E2B Dashboard**: [e2b.dev/dashboard](https://e2b.dev/dashboard)
- **OpenRouter**: [openrouter.ai/keys](https://openrouter.ai/keys)

---

**Version**: 3.0.0  
**Last Updated**: 2025-11-26  
**Deployment Time**: ~5 minutes  
**Status**: Production Ready ✅
