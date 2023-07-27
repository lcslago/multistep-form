/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js,css}'
  ],
  theme: {
    extend: {
      colors: {
        main: {
          //Marine blue
          primaryColor: 'hsl(213, 96%, 18%)',
          //Light Marine blue
          hoverColor: '#174a8a',
          //Purplish blue
          secondaryColor: '#483eff',
          //Pastel blue
          tertiaryColor: '#625aff',
          //Light blue
          quaternaryColor: '#eef5ff',
          //Strawberry red
          quinaryColor: '#f9818d',
          //red
          alertColor: 'hsl(354, 84%, 57%)',
          //orange
          mediumColor: '#E57C23',
          //green
          validatedColor: 'rgb(46, 144, 74)',
        },

        neutral: {
          //Cool gray
          primaryColor: 'hsl(231, 11%, 63%)',
          //Ligth gray
          secondaryColor: 'hsl(229, 24%, 87%)',
          //Magnolia
          tertiaryColor: 'hsl(217, 100%, 97%)',
          //Alabaster
          quaternaryColor: '#ffaf7e',
          //White
          quinaryColor: 'hsl(0, 0%, 100%)',
        }

      },
      fontFamily: {
        primaryFont: ['Ubuntu', 'sans-serif']
      },
      backgroundImage: {
        'desktop-img': "url('../../public/assets/img/bg-sidebar-desktop.svg')",
        'mobile-img': "url('../../public/assets/img/bg-sidebar-mobile.svg')",
        'arcade-icon': "url('../../public/assets/icons/icon-arcade.svg')",
        'advanced-icon': "url('../../public/assets/icons/icon-advanced.svg')",
        'pro-icon': "url('../../public/assets/icons/icon-pro.svg')"
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require('tailwindcss-animated')],
}

