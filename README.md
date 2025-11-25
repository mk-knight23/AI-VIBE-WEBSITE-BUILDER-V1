# Vibe - AI Website Builder

Build stunning websites with AI in seconds. Multi-provider support with free models available.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Providers](#api-providers)
- [Usage](#usage)
- [Security](#security)
- [FAQ](#faq)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

### Core Features
- 🤖 **4 AI Providers** - OpenRouter, MegaLLM, AgentRouter, Routeway
- 🆓 **Free Models** - 12+ free models available
- ⚡ **Real-time Generation** - Watch your website build live
- 🎨 **Modern UI** - Beautiful, responsive interface
- 🔒 **Secure** - API keys stored locally, never on servers
- 📱 **Responsive** - Works on all devices

### Advanced Features
- ⚙️ **In-App Settings** - Configure everything in the UI
- 🎯 **Smart Templates** - Quick-start prompts
- 🔑 **Multi-Provider** - Switch providers on-the-fly
- 📊 **Project Management** - Save and manage projects
- 🛡️ **Rate Limiting** - Prevents abuse (5 projects/minute)
- ✅ **Input Validation** - XSS prevention, sanitization

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd vibe-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
cp .env.example .env
```

4. **Set up database**
```bash
# Update DATABASE_URL in .env
DATABASE_URL='postgresql://user:password@localhost:5432/vibe'

# Run migrations
npx prisma migrate dev
```

5. **Configure Clerk Auth**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```

6. **Configure E2B Sandbox**
```env
E2B_API_KEY=your_e2b_key
E2B_SANDBOX_TEMPLATE=vibe-template
```

7. **Start development server**
```bash
npm run dev
```

---

## ⚙️ Configuration

### Environment Variables

```env
# Database
DATABASE_URL='postgresql://user:password@localhost:5432/vibe'

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# E2B Sandbox
E2B_API_KEY=e2b_...
E2B_SANDBOX_TEMPLATE=vibe-template

# Inngest
INNGEST_EVENT_KEY=local

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API Providers (Optional - can be set in UI)
DEFAULT_PROVIDER=openrouter
OPENROUTER_API_KEY=sk-or-v1-...
MEGALLM_API_KEY=sk-mega-...
AGENTROUTER_API_KEY=sk-...
ROUTEWAY_API_KEY=sk-...
```

### In-App Configuration

1. Click **Settings icon (⚙️)** in navbar
2. Select **"API Keys"** tab
3. Choose your provider
4. Enter API key
5. Click **"Save Settings"**

---

## 🔌 API Providers

### OpenRouter (Recommended for Free)
- **Website:** https://openrouter.ai
- **Get Key:** https://openrouter.ai/keys
- **Base URL:** `https://openrouter.ai/api/v1`
- **Free Models:** 6 available

**Models:**
- `x-ai/grok-4.1-fast:free` - Grok 4.1 Fast
- `deepseek/deepseek-chat-v3-0324:free` - DeepSeek Chat V3
- `qwen/qwen3-coder:free` - Qwen3 Coder
- `google/gemini-2.0-flash-exp:free` - Gemini 2.0 Flash
- `z-ai/glm-4.5-air:free` - GLM 4.5 Air
- `openai/gpt-oss-20b:free` - GPT-oss-20B

### Routeway (Free Alternative)
- **Website:** https://routeway.ai
- **Base URL:** `https://api.routeway.ai/v1`
- **Free Models:** 6 available

**Models:**
- `kimi-k2-0905:free` - Kimi K2
- `minimax-m2:free` - MiniMax M2
- `glm-4.6:free` - GLM 4.6
- `mai-ds-r1:free` - MAI DS R1
- `deepseek-v3-0324:free` - DeepSeek V3
- `llama-3.2-3b-instruct:free` - Llama 3.2 3B

### MegaLLM (Cost-Effective)
- **Website:** https://megallm.io
- **Base URL:** `https://ai.megallm.io/v1`
- **Pricing:** Starting at $0.07/M tokens

**Models:**
- `llama3-8b-instruct` - Cheapest option
- `openai-gpt-oss-20b` - $0.07/M
- `alibaba-qwen3-32b` - $0.15/M
- `llama3.3-70b-instruct` - $0.12/M
- `deepseek-ai/deepseek-v3.1` - $1.00/M
- And 7 more models

### AgentRouter (Intelligent Routing)
- **Website:** https://agentrouter.org
- **Get Key:** https://agentrouter.org/console/token
- **Base URL:** `https://agentrouter.org/v1`

**Models:**
- `glm-4.5` - GLM 4.5
- `glm-4.6` - GLM 4.6
- `deepseek-v3.1` - DeepSeek V3.1
- `deepseek-v3.2` - DeepSeek V3.2
- `claude-haiku-4-5-20251001` - Claude Haiku
- `claude-sonnet-4-5-20250929` - Claude Sonnet
- `deepseek-r1-0528` - DeepSeek R1

---

## 🎯 Usage

### Creating Your First Website

1. **Sign in** to the app
2. **Configure API provider** (Settings ⚙️)
3. **Describe your website:**
   ```
   Create a modern SaaS landing page with:
   - Hero section with gradient
   - Feature cards with icons
   - Pricing table (3 tiers)
   - Testimonials section
   - CTA buttons
   ```
4. **Click generate** and watch it build!

### Example Prompts

**Landing Page:**
```
A professional landing page for a SaaS product with hero section,
features grid, pricing table, testimonials, and footer
```

**Dashboard:**
```
An analytics dashboard with sidebar navigation, chart components,
stats cards, and data table with dark mode support
```

**E-commerce:**
```
A product page with image gallery, product details, add to cart,
related products, and customer reviews
```

**Portfolio:**
```
A creative portfolio with project gallery, about section,
skills showcase, and contact form
```

### Quick Templates

Click any template button for instant prompts:
- 🚀 SaaS Landing Page
- 🛒 E-commerce Product Page
- 📊 Analytics Dashboard
- 💬 Chat Interface
- 🎨 Portfolio Website
- 📝 Blog Layout

---

## 🔒 Security

### API Key Security
✅ **Stored Locally** - Keys saved in browser localStorage
✅ **Never Sent to Servers** - Direct API calls to providers
✅ **No Hardcoded Keys** - All keys user-provided
✅ **Format Validation** - Validates key format per provider
✅ **Password Toggle** - Show/hide keys in settings

### Input Protection
✅ **XSS Prevention** - HTML tags removed
✅ **Sanitization** - All inputs cleaned
✅ **Max Length** - 10,000 character limit
✅ **Validation** - Server-side checks

### Rate Limiting
✅ **5 Projects/Minute** - Per user limit
✅ **Automatic Cleanup** - Memory efficient
✅ **Clear Messages** - User-friendly errors

### Best Practices

**For Users:**
- ✅ Use strong, unique API keys
- ✅ Never share your keys
- ✅ Rotate keys regularly
- ✅ Monitor API usage
- ✅ Start with free models

**For Developers:**
- ✅ Never commit keys to git
- ✅ Use environment variables
- ✅ Validate all inputs
- ✅ Keep dependencies updated
- ✅ Review security advisories

---

## ❓ FAQ

### General Questions

**Q: Is Vibe free to use?**
A: Yes! Use free models from OpenRouter or Routeway at no cost.

**Q: Do I need coding knowledge?**
A: No! Just describe what you want in plain English.

**Q: Where are my API keys stored?**
A: Locally in your browser. They never reach our servers.

**Q: Can I use multiple providers?**
A: Yes! Switch between providers anytime in settings.

**Q: How many projects can I create?**
A: Unlimited, but rate-limited to 5 per minute.

### Technical Questions

**Q: Which provider should I choose?**
A: Start with OpenRouter or Routeway for free models.

**Q: What's the best model for beginners?**
A: Try `deepseek/deepseek-chat-v3-0324:free` on OpenRouter.

**Q: Can I edit generated code?**
A: Yes! All code is accessible and editable.

**Q: Does it work offline?**
A: No, requires internet for AI API calls.

**Q: What tech stack does it use?**
A: Next.js, React, TypeScript, Prisma, Clerk, E2B.

### Troubleshooting

**Q: "Please configure your API key"**
A: Go to Settings (⚙️) → API Keys → Enter your key

**Q: "Too many requests"**
A: Wait 1 minute. Rate limit is 5 projects/minute.

**Q: "Invalid API key format"**
A: Check key starts with correct prefix (sk-or-, sk-mega-, etc.)

**Q: Generation failed**
A: Check internet connection, API key validity, and try again.

**Q: Slow generation**
A: Try a smaller/faster model or different provider.

---

## 🔧 Troubleshooting

### Common Issues

#### API Key Issues
```
Error: "Please configure your API key"
Solution: Settings (⚙️) → API Keys → Add key → Save
```

```
Error: "Invalid API key format"
Solution: Verify key format:
- OpenRouter: sk-or-v1-...
- MegaLLM: sk-mega-...
- AgentRouter: sk-...
- Routeway: sk-...
```

#### Rate Limiting
```
Error: "Too many requests"
Solution: Wait 60 seconds (limit: 5 projects/minute)
```

#### Generation Errors
```
Error: "Failed to create project"
Solutions:
1. Check internet connection
2. Verify API key is valid
3. Try different model
4. Check provider status
```

#### Database Issues
```
Error: "Can't reach database"
Solutions:
1. Check DATABASE_URL in .env
2. Ensure PostgreSQL is running
3. Run: npx prisma migrate dev
```

#### Build Errors
```
Error: TypeScript compilation failed
Solutions:
1. Delete .next folder
2. Run: npm install
3. Run: npm run dev
```

### Testing API Providers

Run the test script:
```bash
node test-apis.js
```

Expected output:
```
✅ OpenRouter - WORKING
✅ MegaLLM - WORKING
✅ Routeway - WORKING
⚠️  AgentRouter - Check API key
```

---

## 🛠️ Development

### Project Structure
```
vibe-main/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utilities & config
│   ├── modules/         # Feature modules
│   ├── trpc/            # tRPC API
│   └── inngest/         # Background jobs
├── prisma/              # Database schema
├── public/              # Static assets
└── .env                 # Environment variables
```

### Key Files
- `src/lib/api-config.ts` - Provider configuration
- `src/lib/settings-store.ts` - Settings management
- `src/inngest/functions.ts` - AI agent logic
- `src/components/settings-dialog.tsx` - Settings UI
- `prisma/schema.prisma` - Database schema

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open database GUI
```

---

## 📊 Performance

### Optimization Tips
- Use smaller models for faster generation
- Free models are optimized for speed
- Rate limiting prevents overload
- Caching reduces API calls

### Model Speed Comparison
- **Fastest:** 3B-20B parameter models
- **Balanced:** 32B-70B parameter models
- **Highest Quality:** 70B+ parameter models

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🆘 Support

- **Issues:** Open a GitHub issue
- **Questions:** Check FAQ section
- **Security:** Report privately via security advisory

---

## 🎉 Credits

Built with:
- [Next.js](https://nextjs.org) - React framework
- [Clerk](https://clerk.com) - Authentication
- [E2B](https://e2b.dev) - Code execution
- [Inngest](https://inngest.com) - Background jobs
- [Prisma](https://prisma.io) - Database ORM
- [tRPC](https://trpc.io) - Type-safe API
- [Tailwind CSS](https://tailwindcss.com) - Styling

---

## 📈 Roadmap

- [ ] More AI providers
- [ ] Team collaboration
- [ ] Project templates library
- [ ] Export to GitHub
- [ ] Custom domains
- [ ] Analytics dashboard

---

**Version:** 1.4  
**Last Updated:** 2025-11-25  
**Status:** Production Ready ✅

---

Made with ❤️ by the Vibe team
