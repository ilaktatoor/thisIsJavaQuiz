/** @type {import('tailwindcss').Config} */
export default {

    content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet':{'max':'500px'} ,
    },
    extend: {
      colors:{
        'mred':'#891E35',
        'mpink':'#D2BEC2',
        'mgreen':'#00BF63',
        'mgray':'#D9D9D9',
        'mbtnpink':'#fad3e1',
        'mbtnfill':'#d480a1',
      },
    },
    conatiner: {
      center: true,
    },
  },
  plugins: [],
}

