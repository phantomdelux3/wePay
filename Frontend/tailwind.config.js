/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Original
        'pastel-violet-bg' : '#48416b',
        'pastel-violet-ubg' : '#373358',
        'royale-yellow' : '#eec08e',
        'lylac' : '#b89af2'
        
      },
    },
    
    fontFamily : {
      logo : ['Handjet']
    }
  },
  plugins: [],
}
