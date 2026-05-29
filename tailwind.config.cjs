module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4f8b',
        blackbg: '#0a0a0a'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
