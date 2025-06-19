#!/bin/bash

echo "🚀 Deploying OpenHands AI Frontend to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Please login to Vercel if prompted..."
vercel login

# Set environment variables
echo "⚙️ Setting environment variables..."
vercel env add NEXT_PUBLIC_API_BASE_URL production
vercel env add NEXT_PUBLIC_WS_URL production  
vercel env add NEXT_PUBLIC_APP_NAME production
vercel env add NODE_ENV production

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your OpenHands AI frontend is now live!"