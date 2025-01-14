/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"],
      },
      keyframes: {
        pulseShadow: {
          '0%, 100%': { boxShadow: '0 15px 30px rgba(59,130,246,0.8)' },
          '50%': { boxShadow: '0 20px 35px rgba(59,130,246,1)' },
        },
      },
      animation: {
        pulseShadow: 'pulseShadow 2s infinite',
      },
    },
  },
  plugins: [],
}


