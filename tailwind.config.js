/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-button":'#FF5E15',
        "blue-button":'#186BAD'
      }
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(80, 80, 80, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.05)",
    }
    
  },
  plugins: [
    require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
       

  ],
}

