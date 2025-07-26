# 🚀 Deployment Guide

## **Vercel Deployment (Frontend)**

### **Step 1: Deploy Frontend to Vercel**

1. **Go to [Vercel](https://vercel.com)**
2. **Import your GitHub repository**
3. **Configure the project:**
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### **Step 2: Add Environment Variables**

In your Vercel project settings, add:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### **Step 3: Deploy**

Click "Deploy" and Vercel will build and deploy your frontend!

---

## **Backend Deployment Options**

### **Option A: Railway (Recommended)**

1. **Go to [Railway](https://railway.app)**
2. **Connect your GitHub repository**
3. **Deploy the backend folder**
4. **Add environment variables:**
   ```env
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   TOGETHER_API_KEY=your_together_ai_key
   MONGODB_URI=your_mongodb_connection_string
   ```

### **Option B: Render**

1. **Go to [Render](https://render.com)**
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure:**
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`

### **Option C: Heroku**

1. **Go to [Heroku](https://heroku.com)**
2. **Create a new app**
3. **Connect your GitHub repository**
4. **Add environment variables in Settings**

---

## **MongoDB Setup**

### **Option A: MongoDB Atlas (Cloud)**

1. **Go to [MongoDB Atlas](https://mongodb.com/atlas)**
2. **Create a free cluster**
3. **Get your connection string**
4. **Add it to your backend environment variables**

### **Option B: Local MongoDB**

For development, you can use a local MongoDB instance.

---

## **Environment Variables Summary**

### **Frontend (Vercel)**
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### **Backend (Railway/Render/Heroku)**
```env
UNSPLASH_ACCESS_KEY=your_unsplash_key
TOGETHER_API_KEY=your_together_ai_key
MONGODB_URI=your_mongodb_connection_string
```

---

## **Testing Your Deployment**

1. **Frontend**: Visit your Vercel URL
2. **Backend**: Test with a tool like Postman or curl
3. **Full Flow**: Try generating a website from your deployed frontend

---

## **Troubleshooting**

### **CORS Issues**
Make sure your backend allows requests from your Vercel domain:

```typescript
// In backend/src/main.ts
app.enableCors({
  origin: ['https://your-vercel-app.vercel.app', 'http://localhost:3000']
});
```

### **Environment Variables Not Working**
- Check that variables are properly set in your deployment platform
- Ensure variable names match exactly
- Restart your deployment after adding new variables

---

## **Cost Considerations**

- **Vercel**: Free tier available
- **Railway**: Free tier available
- **MongoDB Atlas**: Free tier available
- **Together.ai**: Pay-per-use
- **Unsplash**: Free tier available

---

**Happy Deploying! 🚀** 