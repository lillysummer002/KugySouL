/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    // Gradient classes
    'from-purple-400',
    'via-pink-400', 
    'to-blue-400',
    'from-purple-500',
    'to-pink-500',
    'from-purple-600',
    'to-pink-600',
    'from-blue-600',
    'to-purple-600',
    'from-slate-900',
    'via-purple-900',
    'to-slate-900',
    'from-purple-900',
    'via-blue-900',
    'to-pink-900',
    // Background gradients
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'bg-gradient-to-l',
    // Text gradients
    'bg-clip-text',
    'text-transparent',
    // Animation classes
    'animate-pulse',
    'animate-spin',
    // Transform classes
    'hover:scale-105',
    'hover:scale-110',
    'group-hover:scale-110',
    'group-hover:rotate-12',
    'group-hover:translate-x-2',
    // Backdrop effects
    'backdrop-blur-lg',
    'backdrop-blur-xl',
    // Shadow effects
    'shadow-2xl',
    'shadow-purple-500/25',
    'shadow-blue-500/25',
    // Border effects
    'border-purple-500/30',
    'border-white/20',
    'border-white/10',
    // Background opacity
    'bg-white/10',
    'bg-white/5',
    'bg-black/20',
    'bg-black/30',
    'bg-purple-500/30',
    'bg-blue-500/30',
    'bg-pink-500/30',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}