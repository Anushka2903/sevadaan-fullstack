# 🚀 SevaDaan Deployment Guide

This guide walks you through deploying **SevaDaan** across GitHub, Render (Backend API), and Vercel (Frontend SPA).

---

## 📋 Table of Contents
1. [Step 1: Push Project to GitHub](#step-1-push-project-to-github)
2. [Step 2: Deploy Backend on Render](#step-2-deploy-backend-on-render)
3. [Step 3: Deploy Frontend on Vercel](#step-3-deploy-frontend-on-vercel)
4. [Step 4: Connect Frontend & Backend (CORS & Environment Variables)](#step-4-connect-frontend--backend)
5. [Troubleshooting & FAQ](#troubleshooting--faq)

---

## Step 1: Push Project to GitHub

Open PowerShell or your terminal in the project root directory (`SevaDaan-master`):

```powershell
# 1. Stage all changes
git add .

# 2. Commit the changes
git commit -m "feat: complete platform fixes, volunteer & program UI, vercel and render deployment configs"

# 3. Check current branch name (usually master or main)
git branch -M main

# 4. If pushing to your own GitHub repo (replace URL with your repository):
# git remote set-url origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY>.git

# 5. Push to GitHub
git push -u origin main
```

---

## Step 2: Deploy Backend on Render

Render hosts Node.js/Express web services with automatic SSL and zero-downtime deployments.

### Option A: Using the included Blueprint (Easiest)
1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** > **Blueprint**.
3. Connect your GitHub repository.
4. Render will automatically detect [`render.yaml`](./render.yaml).
5. Add the required environment variable:
   - `MONGODB_URI`: Your MongoDB Atlas connection string (e.g. `mongodb+srv://<user>:<password>@cluster0.mongodb.net/sevadaan?retryWrites=true&w=majority`).
6. Click **Apply**.

### Option B: Manual Web Service Setup
1. On [Render](https://dashboard.render.com/), click **New +** > **Web Service**.
2. Select **Build and deploy from a Git repository** and connect your repository.
3. Configure the settings:
   - **Name**: `sevadaan-backend`
   - **Region**: Choose the closest region (e.g., Singapore / Frankfurt / Oregon)
   - **Branch**: `main` (or `master`)
   - **Root Directory**: `Backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
4. In the **Environment Variables** section, add:
   | Key | Value | Notes |
   |---|---|---|
   | `NODE_ENV` | `production` | Production mode |
   | `PORT` | `10000` | Port for Render |
   | `MONGODB_URI` | `mongodb+srv://...` | MongoDB Atlas database URI |
   | `JWT_SECRET` | `generate-a-strong-random-secret-key` | Authentication secret |
   | `JWT_REFRESH_SECRET` | `generate-another-strong-random-key` | Token refresh secret |
   | `FRONTEND_URL` | `https://your-app.vercel.app` | Updated in Step 4 |
   | `ALLOWED_ORIGINS` | `https://your-app.vercel.app` | Updated in Step 4 |
   | `STORAGE_PROVIDER` | `local` | Or `firebase` / `cloudinary` |
5. Click **Create Web Service**.
6. Once deployed, copy your backend URL (e.g., `https://sevadaan-backend.onrender.com`).

---

## Step 3: Deploy Frontend on Vercel

Vercel provides blazing-fast global edge hosting for React Vite applications.

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import your GitHub repository.
3. Configure the Project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click **Edit** and select `Frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
4. In **Environment Variables**, add:
   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://sevadaan-backend.onrender.com/api/v1` |
   | `VITE_APP_NAME` | `SevaDaan NGO Platform` |
   *(Replace `https://sevadaan-backend.onrender.com` with your actual Render URL from Step 2)*
5. Click **Deploy**.
6. Once deployment finishes, copy your live frontend URL (e.g., `https://sevadaan.vercel.app`).

> **Note on Client-Side Routing:** The included [`Frontend/vercel.json`](./Frontend/vercel.json) automatically routes all browser page requests to `index.html` so pages like `/programs`, `/ngos`, and `/volunteer` will load cleanly without 404 errors.

---

## Step 4: Connect Frontend & Backend

Now link the two deployed services:

1. **In Render Dashboard**:
   - Go to your `sevadaan-backend` service > **Environment**.
   - Update `FRONTEND_URL` to your Vercel URL: `https://your-app.vercel.app`.
   - Update `ALLOWED_ORIGINS` to: `https://your-app.vercel.app`.
   - Save changes. Render will automatically redeploy.

2. **In Vercel Dashboard**:
   - Go to your project > **Settings** > **Environment Variables**.
   - Ensure `VITE_API_URL` is set to `https://sevadaan-backend.onrender.com/api/v1`.
   - If you changed this value, trigger a redeploy (**Deployments** > **Redeploy**).

---

## 🎉 Verification Checklist

- [ ] Visit `https://your-app.vercel.app/` — Home page loads with clean hero and volunteer CTA.
- [ ] Visit `https://your-app.vercel.app/ngos` — Displays NGOs and state filter ("All States").
- [ ] Visit `https://your-app.vercel.app/programs` — Displays Programs and filter ("All States").
- [ ] Visit `https://your-app.vercel.app/volunteer` — Displays Volunteer opportunities with "All States".
- [ ] Check `https://your-backend.onrender.com/health` — Returns status 200 OK.
