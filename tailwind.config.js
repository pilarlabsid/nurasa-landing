/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-cocoa': '#3D2314',
        'warm-cream': '#FAF6F1',
        'ivory': '#FFFDF9',
        'accent-amber': '#A04415', /* Darkened from #C45C26 for WCAG 4.5:1 contrast against light bgs */
        'accent-red': '#8B2C1A',
        'cocoa-light': '#5D3D2E',
        'cocoa-dark': '#2A1810',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
