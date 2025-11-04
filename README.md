# Inquiro 🔍

Inquiro 🔍 is a **real-time reasearch assitant** built with the latest web stack — **Next.js 15, Tailwind CSS v4, Prisma, NextAuth.js, and Socket.IO**.  


---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 15, Tailwind CSS v4, Shadcn UI |
| **Backend** | Node.js (API Routes in Next.js), Socket.IO |
| **Database** | MongoDB + Prisma ORM |
| **Auth** | NextAuth.js |
| **Deployment** | Vercel (Frontend + API) |
| **Future Add-ons** | Media uploads, push notifications, and AI-powered message search |

---

##  Features
- Secure authentication (NextAuth)
-  Real-time 1:1 and group chat
-  Modern, minimal UI (Shadcn + Tailwind v4)
-  Powered by Socket.IO for instant updates
-  Ready for custom domain deployment (e.g., k3chat.com)

---

##  Setup

```bash
# 1. Clone the repo
git clone 
cd Inquiro

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
# Add your MongoDB URI and NextAuth secret

# 4. Run locally
npm run dev
