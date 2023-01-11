/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      'xsm':'416px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {},
    fontFamily: {
      'custom' : ['Abel', 'sans-serif']
    }
  },
  plugins: [],
}
