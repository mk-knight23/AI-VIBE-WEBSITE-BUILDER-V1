# Deployment Guide - Vibe AI Website Builder

## 🚀 Quick Deploy to Vercel

### Prerequisites
1. GitHub account
2. Vercel account (sign up at https://vercel.com)
3. Neon database account (sign up at https://neon.tech)
4. Clerk account (sign up at https://clerk.com)
5. E2B account (sign up at https://e2b.dev)

---

## Step 1: Setup Neon Database

1. **Create Neon Database**
   - Go to https://neon.tech
   - Create a new project
   - Copy the connection string

2. **Connection String Format**
   ```
   postgresql://user:password@host.neon.tech/dbname?sslmode=require
   ```

---

## Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
cd /Users/mkazi/Downloads/vibe-main
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Vibe AI Website Builder v1.4"

# Create repository on GitHub (via web interface)
# Then add remote and push
git remote add origin https://github.com/YOUR_USERNAME/vibe-website-builder.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Import Project**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

2. **Configure Environment Variables**
   Add these in Vercel dashboard:

   ```env
   # Database
   DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
   CLERK_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # E2B
   E2B_API_KEY=e2b_...
   E2B_SANDBOX_TEMPLATE=vibe-template

   # Inngest
   INNGEST_EVENT_KEY=your_production_key

   # App URL (will be provided by Vercel)
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and add environment variables
```

---

## Step 4: Run Database Migrations

After deployment, run migrations:

```bash
# Using Vercel CLI
vercel env pull .env.production
npx prisma migrate deploy

# Or via Vercel dashboard
# Go to your project → Settings → Environment Variables
# Add DATABASE_URL
# Then redeploy
```

---

## Step 5: Configure Clerk for Production

1. **Update Clerk Settings**
   - Go to Clerk dashboard
   - Add your Vercel domain to allowed domains
   - Update redirect URLs

2. **Webhook Setup (Optional)**
   - Add webhook URL: `https://your-app.vercel.app/api/webhooks/clerk`

---

## Step 6: Configure Inngest for Production

1. **Create Inngest Account**
   - Go to https://inngest.com
   - Create new app

2. **Add Webhook**
   - URL: `https://your-app.vercel.app/api/inngest`
   - Copy event key
   - Add to Vercel environment variables

---

## Environment Variables Checklist

### Required
- [ ] DATABASE_URL (Neon)
- [ ] NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- [ ] CLERK_SECRET_KEY
- [ ] E2B_API_KEY
- [ ] INNGEST_EVENT_KEY
- [ ] NEXT_PUBLIC_APP_URL

### Optional (Users can add in UI)
- [ ] OPENROUTER_API_KEY
- [ ] MEGALLM_API_KEY
- [ ] AGENTROUTER_API_KEY
- [ ] ROUTEWAY_API_KEY

---

## Post-Deployment

1. **Test the Application**
   - Visit your Vercel URL
   - Sign up/Sign in
   - Configure API keys in settings
   - Create a test project

2. **Monitor**
   - Check Vercel logs
   - Monitor Neon database
   - Check Inngest dashboard

3. **Custom Domain (Optional)**
   - Go to Vercel dashboard
   - Add custom domain
   - Update DNS records

---

## Troubleshooting

### Build Fails
```bash
# Check build logs in Vercel
# Common issues:
# 1. Missing environment variables
# 2. Database connection issues
# 3. Prisma generation errors

# Solution: Ensure all env vars are set
```

### Database Connection Issues
```bash
# Verify DATABASE_URL format
# Ensure ?sslmode=require is included
# Check Neon database is active
```

### Clerk Authentication Issues
```bash
# Verify domain is added in Clerk dashboard
# Check redirect URLs are correct
# Ensure API keys are production keys
```

---

## Git Commands Reference

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest
git pull origin main

# Create new branch
git checkout -b feature-name

# Merge branch
git checkout main
git merge feature-name
```

---

## Vercel CLI Commands

```bash
# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel rm deployment-url

# Pull environment variables
vercel env pull
```

---

## Security Notes

- ✅ Never commit .env file
- ✅ Use production API keys in Vercel
- ✅ Enable SSL/HTTPS (automatic on Vercel)
- ✅ Rotate keys regularly
- ✅ Monitor usage and logs

---

## Support

- Vercel Docs: https://vercel.com/docs
- Neon Docs: https://neon.tech/docs
- Clerk Docs: https://clerk.com/docs
- E2B Docs: https://e2b.dev/docs

---

**Ready to deploy! 🚀**
