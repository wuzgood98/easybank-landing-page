/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        /* Primary */
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        /* Neutral */
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
      backgroundImage: {
        introDesktop: "url('./src/images/bg-intro-desktop.svg')",
        introMobile: "url('./src/images/bg-intro-mobile.svg')",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
