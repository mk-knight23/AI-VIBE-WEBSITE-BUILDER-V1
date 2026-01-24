# Vibe - AI Website Builder

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/mk-knight23/vibe-main)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black.svg)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/vibe-main)

Build stunning websites with AI in seconds using real-time streaming.

> **Version 3.0.0** - Complete architecture overhaul with 4 AI  providers, real-time streaming, and modern tech stack.

## 🚀 Quick Start

For a detailed local setup guide, see [RUN_GUIDE.md](RUN_GUIDE.md).

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## ✨ Features

- 🤖 **4 AI Providers** - OpenRouter, Routeway, MegaLLM, AgentRouter
- 🆓 **Free Models** - Multiple free options available
- ⚡ **Real-time Streaming** - Watch your website build live
- 🎨 **Modern UI** - Clean, responsive interface
- 🔒 **Secure** - API keys stored locally in browser
- 📱 **Mobile Friendly** - Works on all devices

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Setup

1. **Clone and install**
```bash
git clone <repository-url>
cd vibe-main
npm install
```

2. **Configure environment**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# Database
DATABASE_URL='postgresql://user:password@localhost:5432/vibe'

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# E2B Sandbox
E2B_API_KEY=e2b_...
```

3. **Setup database**
```bash
npx prisma migrate dev
```

4. **Start development**
```bash
npm run dev
```

## 🔌 AI Providers

Configure API keys in the Settings dialog (⚙️) in the app.

### OpenRouter (Free)
- **Website:** https://openrouter.ai
- **Free Models:** Grok, DeepSeek, Qwen, Gemini

### Routeway (Free)
- **Website:** https://routeway.ai
- **Free Models:** Kimi, GLM, DeepSeek, Llama

### MegaLLM (Paid)
- **Website:** https://megallm.io
- **Models:** Llama, Qwen, DeepSeek

### AgentRouter
- **Website:** https://agentrouter.org
- **Models:** GLM, DeepSeek, Claude

## 🎯 How It Works

1. **Sign in** to the app
2. **Configure API key** in Settings (⚙️)
3. **Describe your website** in the input
4. **Watch it build** in real-time
5. **Preview instantly** when complete

## 📁 Project Structure

```
vibe-main/
├── src/
│   ├── app/              # Next.js app routes
│   │   ├── (home)/       # Home pages
│   │   ├── projects/     # Project pages
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   │   └── ui/           # UI components
│   ├── lib/              # Core utilities
│   ├── modules/          # Feature modules
│   │   ├── home/         # Home module
│   │   ├── projects/     # Projects module
│   │   └── messages/     # Messages module
│   ├── hooks/            # Custom React hooks
│   └── trpc/             # tRPC API layer
├── prisma/               # Database schema
└── public/               # Static assets
```

## 🏗️ Architecture

### Real-Time Streaming
- **API Route:** `/api/generate` - Server-Sent Events streaming
- **Hook:** `useGenerateStream` - React hook for streaming
- **Component:** `AutoGenerator` - Auto-starts generation

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Database:** PostgreSQL + Prisma
- **Auth:** Clerk
- **Sandbox:** E2B Code Interpreter
- **Styling:** Tailwind CSS
- **API:** tRPC
- **UI:** Radix UI + shadcn/ui

## 🔒 Security

- ✅ API keys stored locally (browser localStorage)
- ✅ Authentication required (Clerk)
- ✅ Rate limiting (5 projects/min)
- ✅ Input sanitization
- ✅ CSRF protection

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Environment Variables

Set these in your deployment platform:
- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `E2B_API_KEY`

## 📚 API Routes

- `POST /api/generate` - Generate website with streaming
- `POST /api/validate-key` - Validate AI provider API key
- `/api/trpc/*` - tRPC API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License

## 🆘 Support

- **Issues:** Open a GitHub issue
- **Docs:** Comprehensive documentation is available in the [`docs/`](docs/) folder.

---

**Version:** 3.0.0  
**Status:** Production Ready ✅

Made with ❤️ using AI
