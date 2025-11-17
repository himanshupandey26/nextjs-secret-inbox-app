# 🌙 Secret Inbox — Next.js Anonymous Messaging App  
**A production-grade anonymous messaging platform built with Next.js, MongoDB, Zod, Auth.js, Resend, and modern UI tools.**

---

## 🚀 Overview

Secret Inbox allows users to create their own public URL where anyone can send them anonymous messages.  
The project includes:

- Secure user signup with OTP verification  
- Username availability check  
- Zod for validation across API & forms  
- MongoDB + Mongoose integration  
- Auth.js for authentication  
- AI-enhanced message pipelines  
- Clean UI with Shadcn + React Hook Form  
- Running parts of the app on the **Next.js Edge Runtime** for high performance  

---

## ✨ Key Features

### 🔐 **1. User Signup + OTP System**
- Custom OTP generator  
- OTP expiration logic  
- Verification route  
- Email delivery via Resend  

### 🧪 **2. Strong Validation with Zod**
- Client-side + server-side unified schemas  
- Safe parsing for API routes  
- Clean error handling  

### 🗄️ **3. MongoDB Integration**
- Mongoose models  
- Connection handling  
- Optimized for App Router  

### 👤 **4. Auth.js (Next Auth)**
- Secure sessions  
- Credential-based login  
- JWT strategy  
- Middleware protection  

### 📩 **5. Anonymous Message Inbox**
- Public URL for receiving messages  
- Anti-spam logic  
- Aggregation pipeline for dashboard insights  

### 🤖 **6. AI Features (Optional)**
- AI message insights  
- Toxicity filter  
- Message summarizer  

### 🎨 **7. UI Built with Shadcn + RHF**
- Form validation  
- Debounced username check  
- Reusable UI components  

### 🌐 **8. Edge Runtime**
Used for faster API responses & global low-latency delivery.

---

## 🛠️ Tech Stack

### **Frontend**
- Next.js 14 (App Router)
- React
- Shadcn UI
- React Hook Form
- Zod

### **Backend**
- Next.js API Route Handlers
- Mongoose (ODM)
- Auth.js (NextAuth)
- Resend (Email service)

### **Database**
- MongoDB Atlas

---

## 📁 Folder Structure (Recommended)

```
nextjs-secret-inbox-app/
│── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── api/
│   │   ├── auth/
│   │   ├── message/
│   │   └── otp/
│   └── layout.jsx
│
│── components/
│── lib/
│── models/
│── hooks/
│── utils/
│── config/
│── public/
└── README.md
```

---

## ⚙️ Environment Variables

Create `.env`:

```
MONGODB_URI=
RESEND_API_KEY=
AUTH_SECRET=
AUTH_URL=
NEXT_PUBLIC_BASE_URL=
```

---

## 🧪 Development Setup

```bash
npm install
npm run dev
```

---

## 🔮 Future Enhancements

- Reply anonymously  
- Voice message support  
- Dark/light smart theme  
- Rate-limiting on message send  
- Device fingerprinting  
- Analytics dashboard  

---

## ❤️ Author
Built with passion by **Himanshu Pandey**.


---
---

<br>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
