# CodeVerse 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Convex](https://img.shields.io/badge/Backend-Convex-green)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-blue)](https://clerk.com/)
[![Payments](https://img.shields.io/badge/Payments-LemonSqueezy-yellow)](https://lemonsqueezy.com/)

CodeVerse is a full-stack **code snippet sharing platform** where developers can:
- ✨ Sign up / Sign in with **Clerk**
- 💻 Create, save and share **code snippets**
- 💬 Comment and discuss with other users
- 💳 Upgrade to **Pro** via **LemonSqueezy** payments
- ⚡ Powered by **Convex backend** and deployed on **Vercel**

👉 Live demo: [https://code-verse-psi.vercel.app/](https://code-verse-psi.vercel.app/)

---

## ✨ Features

### Free Plan
- ✅ Create & view code snippets  
- ✅ Comment on public snippets  
- ✅ Light syntax highlighting  

### Pro Plan
- 🚀 Unlimited snippet creation  
- 🚀 Private snippets  
- 🚀 Advanced syntax highlighting themes  
- 🚀 Priority support  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/code-verse.git
cd code-verse
```

### 2. Install dependencies
```
npm install
npm run dev
npx convex dev
```
###3. Environment Variables
``` 
NEXT_PUBLIC_CONVEX_URL=<your convex deployment url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your clerk publishable key>
CLERK_SECRET_KEY=<your clerk secret key>
LEMON_SQUEEZY_WEBHOOK_SECRET=<your lemon squeezy webhook secret>
```

##Tech Stack

Next.js 15 – Frontend
Convex – Realtime backend
Clerk – Authentication
LemonSqueezy – Payments
Prism – Syntax highlighting

##Contributing
Pull requests are welcome! Feel free to fork and improve the project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
