# Vibe 1.2 - OpenRouter Integration

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Version 1.2 Updates

**Migrated from OpenAI to OpenRouter API** 🎉

### Key Changes:
- **Free Models Integration**: Now uses free models from OpenRouter including:
  - **MiniMax M2** (`minimax/minimax-2.0`) - For main code generation
  - **Qwen 2.5 Coder** (`qwen/qwen-2.5-coder-32b-instruct`) - For fragment title generation  
  - **DeepSeek Coder** (`deepseek/deepseek-coder`) - For response generation
- **Cost Optimization**: Uses free tier models for all AI operations
- **Environment Configuration**: Updated to use `OPENROUTER_API_KEY` instead of `OPENAI_API_KEY`
- **API Endpoint**: Now uses OpenRouter's base URL (`https://openrouter.ai/api/v1`)

### Environment Variables
```env
# OpenRouter Configuration (Free Models)
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENAI_BASE_URL="https://openrouter.ai/api/v1"
```
Added New Commit Test
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev Good Work 
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/nextjs) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
