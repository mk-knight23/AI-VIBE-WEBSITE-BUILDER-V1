# 🏃 Running Vibe Locally

Follow these steps to get the Vibe AI Website Builder running on your machine.

## 🛠️ Prerequisites

- **Node.js**: v18 or later
- **Package Manager**: `npm`
- **Database**: PostgreSQL (Neon.tech recommended)
- **Authentication**: [Clerk](https://clerk.com) account
- **AI Sandbox**: [E2B](https://e2b.dev) account

## 🚀 Step-by-Step Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd vibe-main-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the template and fill in your secrets:
```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL`: Your PostgreSQL connection string.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` & `CLERK_SECRET_KEY`: From your Clerk dashboard.
- `E2B_API_KEY`: From your E2B dashboard.

### 4. Database Setup
Initialize your database schema:
```bash
npx prisma db push
```

### 5. Launch the App
```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## ⚙️ Configuration

Once the app is running:
1.  **Sign in** through the Clerk interface.
2.  Click the **Settings (⚙️)** icon.
3.  Enter your **AI Provider API Key** (e.g., OpenRouter).
4.  Start building!

## 🧪 Verification Commands

If you want to verify the build or types:
```bash
# Type check
npx tsc --noEmit

# Production build
npm run build
```
