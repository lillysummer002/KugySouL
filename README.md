# 🤖 OpenHands AI Frontend

A premium, modern frontend for OpenHands AI - a powerful AI agent that can execute code, browse the web, and interact with various tools.

![OpenHands AI](https://img.shields.io/badge/OpenHands-AI%20Assistant-blue?style=for-the-badge&logo=robot)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Premium UI/UX** - Modern, responsive design with smooth animations
- 🌙 **Dark/Light Mode** - Seamless theme switching
- 💬 **Real-time Chat** - Interactive conversations with OpenHands AI
- 🚀 **Code Execution** - Watch AI execute code in real-time
- 🌐 **Web Browsing** - AI can browse and interact with websites
- 📁 **File Management** - Create, edit, and manage files
- 🔧 **Settings Panel** - Configure API endpoints and preferences
- 📱 **Mobile Responsive** - Perfect experience on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 15 and modern tools

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **HTTP Client**: Axios
- **Real-time**: Socket.IO Client (ready for WebSocket integration)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Access to OpenHands Backend API

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd openhands-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://minatoz997-backend66.hf.space
   NEXT_PUBLIC_WS_URL=wss://minatoz997-backend66.hf.space
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── chat/              # Chat interface page
│   ├── settings/          # Settings page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   ├── landing/           # Landing page sections
│   └── chat/              # Chat interface components
├── lib/                   # Utility functions
├── services/              # API services
├── types/                 # TypeScript type definitions
└── hooks/                 # Custom React hooks
```

## 🎯 Key Components

### Landing Page
- **Hero Section**: Eye-catching introduction with animated elements
- **Features Section**: Showcase of OpenHands AI capabilities
- **Demo Section**: Interactive demonstration of AI workflow

### Chat Interface
- **Real-time messaging** with OpenHands AI
- **Code syntax highlighting** for executed code
- **Copy-to-clipboard** functionality
- **Message history** and conversation management
- **Typing indicators** and loading states

### Settings Panel
- **API configuration** for backend connection
- **Connection testing** and health checks
- **Theme preferences** and customization options
- **Backend information** and feature flags

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API URL | `https://minatoz997-backend66.hf.space` |
| `NEXT_PUBLIC_WS_URL` | WebSocket URL | `wss://minatoz997-backend66.hf.space` |
| `NEXT_PUBLIC_APP_NAME` | Application name | `OpenHands AI` |

### Backend Integration

The frontend is designed to work with the OpenHands Backend API:

- **Health Check**: `GET /health`
- **Configuration**: `GET /api/options/config`
- **Conversations**: `POST /api/conversations`
- **WebSocket**: Real-time communication (ready for implementation)

## 🎨 Design System

### Colors
- **Primary**: Blue to Purple gradient (`from-blue-600 to-purple-600`)
- **Secondary**: Emerald and other accent colors
- **Background**: Adaptive light/dark themes
- **Text**: High contrast for accessibility

### Typography
- **Font**: Inter (system font fallback)
- **Sizes**: Responsive scale from mobile to desktop
- **Weights**: 400, 500, 600, 700

### Components
- **Buttons**: Multiple variants (default, outline, ghost, gradient)
- **Cards**: Consistent spacing and shadows
- **Inputs**: Accessible form controls
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- **Netlify**: Static export or server-side rendering
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform
- **AWS**: Amplify or EC2

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenHands Team** - For the amazing AI backend
- **Vercel** - For Next.js and deployment platform
- **Tailwind Labs** - For the excellent CSS framework
- **Radix UI** - For accessible component primitives

## 📞 Support

- **Documentation**: [OpenHands Backend](https://github.com/Minatoz997/OpenHands-Backend)
- **API Docs**: [Backend API Documentation](https://minatoz997-backend66.hf.space/docs)
- **Issues**: Create an issue in this repository

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
