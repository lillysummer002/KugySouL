'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Code, 
  Zap,
  Sparkles,
  BookOpen,
  Pen,
  Star,
  Brain,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-8 py-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-semibold text-lg">Premium AI Assistant Platform</span>
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              OpenHands AI
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 block mt-4">
              The Future of AI Assistance
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-8 max-w-5xl text-2xl md:text-3xl leading-relaxed text-gray-300 mb-16"
          >
            Execute code, browse the web, write novels, and automate complex tasks with the most 
            <span className="text-purple-400 font-semibold"> advanced AI assistant </span>
            ever created.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
          >
            <Link href="/chat">
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-16 py-8 text-2xl font-bold shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                <MessageSquare className="mr-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
                Start AI Chat
                <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/novel">
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-16 py-8 text-2xl font-bold shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                <BookOpen className="mr-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
                Write Novels
                <Pen className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
          >
            {[
              { icon: Brain, title: "AI Powered", desc: "Advanced reasoning", color: "from-purple-400 to-pink-400" },
              { icon: Zap, title: "Lightning Fast", desc: "Instant responses", color: "from-yellow-400 to-orange-400" },
              { icon: BookOpen, title: "Novel Writing", desc: "Creative assistance", color: "from-blue-400 to-purple-400" },
              { icon: Code, title: "Code Execution", desc: "Multi-language support", color: "from-green-400 to-blue-400" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-5xl font-black text-purple-400 mb-3">50K+</div>
              <div className="text-gray-300 text-lg">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-5xl font-black text-blue-400 mb-3">1M+</div>
              <div className="text-gray-300 text-lg">Tasks Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300">
              <div className="text-5xl font-black text-pink-400 mb-3">99.9%</div>
              <div className="text-gray-300 text-lg">Uptime</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}