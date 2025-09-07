/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        // Light mode colors
        primary: {
          50: '#fef7ed',
          100: '#fdedd4',
          200: '#fad7a8',
          300: '#f6bb71',
          400: '#f19437',
          500: '#ed8722', // Main orange
          600: '#de6a1a',
          700: '#b85309',
          800: '#93440e',
          900: '#773a12',
        },
        // Dark mode colors (matching reference website)
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent colors for dark mode
        accent: {
          blue: '#3b82f6',
          green: '#10b981',
          purple: '#8b5cf6',
          red: '#ef4444',
          yellow: '#f59e0b',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'dark-card': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        'orange-gradient': 'linear-gradient(135deg, #ed8722 0%, #f19437 100%)',
      },
      boxShadow: {
        'dark': '0 10px 25px -3px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 20px 40px -3px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(237, 135, 34, 0.3)',
        'glow-lg': '0 0 40px rgba(237, 135, 34, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(237, 135, 34, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(237, 135, 34, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
