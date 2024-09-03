/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  //設定手動切換DarkMode
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wa": "#00668A",
        "wb": "#004E71",
        //新增自定義顏色
      },
      screens:{
        '3xl':'1980px',
        'haha':'1338px'
      }
    },
  },
  plugins: [],
}

