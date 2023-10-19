/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors:{
      primary:'#3DD2CC',
      primary40:'#3DD2CC40',
      secondary:'#1e2732',
      blue:'#1d9bf0',
      white:'#f7f9f9',
      gray:'#8b98a5',
      secondary2:'#273340'
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
}

