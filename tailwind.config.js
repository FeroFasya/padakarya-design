/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: '#14201B',
        moss: '#24362D',
        pool: '#2F8F8B',
        teak: '#8A5A3B',
        stone: '#E4E0D7',
        bone: '#F6F5F1',
        ink: '#1C1F1D'
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
