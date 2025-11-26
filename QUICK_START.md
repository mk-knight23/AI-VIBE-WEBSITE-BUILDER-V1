# Quick Start - Vibe v3.0.0

## 🚀 Deploy in 5 Minutes

### 1. Click Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/vibe-main)

### 2. Add Environment Variables

```env
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx
CLERK_SECRET_KEY=sk_live_xxx
E2B_API_KEY=e2b_xxx
OPENROUTER_API_KEY=sk-or-v1-xxx
DEFAULT_PROVIDER=openrouter
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### 3. Get API Keys

| Service | URL | Free Tier |
|---------|-----|-----------|
| **Neon** (Database) | [neon.tech](https://neon.tech) | ✅ 0.5GB |
| **Clerk** (Auth) | [clerk.com](https://clerk.com) | ✅ 10k MAU |
| **E2B** (Sandbox) | [e2b.dev](https://e2b.dev) | ✅ Limited |
| **OpenRouter** (AI) | [openrouter.ai](https://openrouter.ai) | ✅ Free models |

### 4. Deploy & Test

1. Click "Deploy" on Vercel
2. Wait 2-3 minutes
3. Update `NEXT_PUBLIC_APP_URL` with your Vercel URL
4. Update Clerk redirect URLs
5. Run: `DATABASE_URL="..." npx prisma migrate deploy`
6. Test: Sign up → Create project → Generate

---

## 💻 Local Development

```bash
# Clone
git clone https://github.com/mk-knight23/vibe-main.git
cd vibe-main

# Install
npm install

# Setup
cp .env.example .env.local
# Edit .env.local with your keys

# Database
npx prisma migrate dev

# Run
npm run dev
# Open http://localhost:3000
```

---

## 📚 Documentation

- **Full Setup**: [VERCEL_SETUP.md](VERCEL_SETUP.md)
- **Features**: [FEATURES.md](FEATURES.md)
- **Deployment**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

---

## 🆘 Troubleshooting

### Build Fails
- Check all environment variables are set
- Verify no typos in variable names

### Auth Not Working
- Update Clerk URLs with your domain
- Check redirect URLs match exactly

### Generation Fails
- Verify AI provider API key is valid
- Check E2B API key
- Test in settings dialog

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/mk-knight23/vibe-main/issues)
- **Docs**: See documentation files

---

**Version**: 3.0.0 | **Status**: Production Ready ✅
