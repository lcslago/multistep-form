/** @type {import('tailwindcss').Config} */
import theme from './src/constants/projectColorScheme.json' assert {type: "json"};
const mainColors = theme.main;
const neutralColors = theme.neutral;
const fonts = theme.fonts;

module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js,css}'
  ],
  theme: {
    extend: {
      colors: {
        main: {
          primaryColor: mainColors.primaryColor,
          hoverColor: mainColors.hoverColor,
          secondaryColor: mainColors.secondaryColor,
          tertiaryColor: mainColors.tertiaryColor,
          quaternaryColor: mainColors.quaternaryColor,
          quinaryColor: mainColors.quinaryColor,
          alertColor: mainColors.alertColor,
          mediumColor: mainColors.mediumColor,
          validatedColor: mainColors.validatedColor,
        },

        neutral: {
          primaryColor: neutralColors.primaryColor,
          secondaryColor: neutralColors.secondaryColor,
          tertiaryColor: neutralColors.tertiaryColor,
          quaternaryColor: neutralColors.quaternaryColor,
          quinaryColor: neutralColors.quinaryColor,
        }

      },
      fontFamily: {
        primaryFont: fonts.primaryFont
      },
      backgroundImage: {
        'desktop-img': "url('../../public/assets/img/bg-sidebar-desktop.svg')",
        'mobile-img': "url('../../public/assets/img/bg-sidebar-mobile.svg')",
        'arcade-icon': "url('../../public/assets/icons/icon-arcade.svg')",
        'advanced-icon': "url('../../public/assets/icons/icon-advanced.svg')",
        'pro-icon': "url('../../public/assets/icons/icon-pro.svg')",
        'thankyou-icon': "url('../../public/assets/icons/icon-thank-you.svg')"
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require('tailwindcss-animated'), require('flowbite/plugin')],
}
