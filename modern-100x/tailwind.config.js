module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111112',
        surface: '#18181b',
        primary: '#7b5cff', // vibrant purple
        accent: '#00ffd0', // neon cyan
        muted: '#232329',
        text: '#f3f3f3',
        secondary: '#ffb86b', // orange accent
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'glow': '0 0 16px 2px #7b5cff44',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}; 