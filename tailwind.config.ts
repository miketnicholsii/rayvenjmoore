import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
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
        // Brand Colors - RJM 6-Color Palette
        sage: {
          DEFAULT: "hsl(var(--sage))",
          light: "hsl(var(--sage-light))",
          dark: "hsl(var(--sage-dark))",
        },
        olive: {
          DEFAULT: "hsl(var(--olive))",
          light: "hsl(var(--olive-light))",
          dark: "hsl(var(--olive-dark))",
        },
        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          light: "hsl(var(--terracotta-light))",
          dark: "hsl(var(--terracotta-dark))",
        },
        "dark-forest": "hsl(var(--dark-forest))",
        "warm-beige": "hsl(var(--warm-beige))",
        cream: "hsl(var(--cream))",
        // High-contrast text colors
        "off-white": "hsl(var(--off-white))",
        "near-white": "hsl(var(--near-white))",
        // Legacy mappings for compatibility
        navy: {
          DEFAULT: "hsl(var(--navy))",
          deep: "hsl(var(--deep-navy))",
          marian: "hsl(var(--marian-blue))",
          steel: "hsl(var(--steel-blue))",
        },
        royal: {
          DEFAULT: "hsl(var(--royal-blue))",
          hover: "hsl(var(--royal-blue-hover))",
        },
        jet: "hsl(var(--jet))",
        battleship: "hsl(var(--battleship))",
        platinum: {
          DEFAULT: "hsl(var(--platinum))",
          light: "hsl(var(--platinum-light))",
        },
        silver: {
          DEFAULT: "hsl(var(--silver))",
          light: "hsl(var(--silver-light))",
        },
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          light: "hsl(var(--charcoal-light))",
          gray: "hsl(var(--charcoal-gray))",
        },
        slate: "hsl(var(--slate))",
        steel: "hsl(var(--steel))",
        forest: "hsl(var(--forest))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-terracotta": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(18 26% 40% / 0.4)" },
          "50%": { boxShadow: "0 0 0 12px hsl(18 26% 40% / 0)" },
        },
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "pulse-terracotta": "pulse-terracotta 2s ease-in-out infinite",
        "gentle-float": "gentle-float 6s ease-in-out infinite",
        "shimmer": "shimmer 0.8s ease-out",
      },
      boxShadow: {
        'soft': '0 4px 20px -4px hsl(100 8% 31% / 0.1)',
        'elevated': '0 12px 40px -8px hsl(100 8% 31% / 0.15)',
        'terracotta': '0 8px 30px -6px hsl(18 26% 40% / 0.3)',
        'card': '0 1px 3px hsl(100 8% 31% / 0.05), 0 4px 12px hsl(100 8% 31% / 0.08)',
        'warm': '0 8px 30px -6px hsl(18 26% 40% / 0.35)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
