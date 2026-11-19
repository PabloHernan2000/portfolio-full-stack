/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#080B10',
        surface: {
          DEFAULT: '#0F141D',
          hover: '#141B26',
          raised: '#161F2E',
        },
        border: {
          DEFAULT: '#1E293B',
          hover: '#334155',
          subtle: 'rgba(255, 255, 255, 0.06)',
        },
        accent: {
          DEFAULT: '#4F7CFF',
          hover: '#6891FF',
          muted: 'rgba(79, 124, 255, 0.15)',
          glow: 'rgba(79, 124, 255, 0.3)',
        },
        success: {
          DEFAULT: '#10B981',
          hover: '#059669',
          muted: 'rgba(16, 185, 129, 0.15)',
        },
        slate: {
          950: '#080B10',
          900: '#0F141D',
          850: '#141B26',
          800: '#1E293B',
          700: '#334155',
          400: '#94A3B8',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 24px -4px rgba(79, 124, 255, 0.35)',
        'glow-success': '0 0 20px -4px rgba(16, 185, 129, 0.35)',
        'inner-card': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'linear-gradient-border': 'linear-gradient(to right, rgba(79, 124, 255, 0.4), rgba(16, 185, 129, 0.2), transparent)',
      },
    },
  },
  plugins: [],
};
