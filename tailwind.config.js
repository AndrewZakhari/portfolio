/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: "terminal"
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translate(100%, 0px)',
            opacity: "0"
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: '1'
          },
        },
        scale: {
          "0%": {
            transform: "scale(1, 1)",
            opacity: "0"
          },
          '25%': {
           
            transform: "scale(1.1, 1)"
          },
          "75%": {
            
            transform: "scale(1.2, 1)"
          },
          "100%": {
            transform: "scale(1, 1)",
            opacity: "1"
          }
        },
        fadeIn:{
          '0%': {opacity: "0"}, "100%": {opacity: '1'}
        },
      },
      animation: {
        slideIn2s : "slideIn 2s ease-in-out ",
        slideIn3s: "slideIn 3s ease-in-out",
        slideIn1s: "slideIn 1s ease-in-out",
        scale1s: "scale  1s ease-in-out",
        scale2s: "scale 2s ease-in-out ",
        fadeIn: "fadeIn 2s ease-in-out"
      },
      skew:{
        '80': "80deg",
        '90': '90deg'
      },
      borderRadius:{
        'pacTop': "100px 100px 0 0",
        'pacBottom': "0 0 100px 100px"
      }
    },
  },
  plugins: [],
}
