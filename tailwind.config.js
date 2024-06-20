module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } , xl: {max: "1280"} },
    extend: {


      
      keyframes: {
        moveTopToBottom: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveBottomToTop: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveLeftToRight1: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveLeftToRight2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveLeftToRight3: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        moveTopToBottom: 'moveTopToBottom 1.5s ease-in-out',
        moveBottomToTop: 'moveBottomToTop 1.5s ease-in-out',
        moveRightToLeft: 'moveRightToLeft 1.5s ease-in-out',
        moveLeftToRight: 'moveLeftToRight 1.5s ease-in-out',
        moveLeftToRight1: 'moveLeftToRight1 2s ease-in-out',  
        moveLeftToRight2: 'moveLeftToRight1 2.5s ease-in-out',  
        moveLeftToRight3: 'moveLeftToRight1 3s ease-in-out',  
        
        jump: 'jump 1s infinite',
      },






      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_b2: "#ffffffb2",
          A700_3f: "#ffffff3f",
          A700_72: "#ffffff72",
          A700_01: "#fdfdfd",
          A700: "#ffffff",
        },
        gray: {
          50: "#fcfafa",
          100: "#f3f3f3",
          200: "#f0f0f0",
          400: "#cacaca",
          600: "#766c67",
          
          "600_99": "#84848499",
          "50_01": "#fbfbfb",
          "200_66": "#efe8e866",
          "700_b5": "#6e6969b5",
          "100_01": "#f4f4f4",
          "700_66_01": "#6e696966",
          "700_66": "#77606066",
        },
        blue1:{
         50:" #ecfdf5" 
        },
        black: {
          900: "#000000",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_01": "#0a0909",
          "900_00": "#00000000",
          "900_02": "#0f0404",
          "900_33": "#00000033",
          
          "900_cc": "#000000cc",
          "900_02": "#0a0909",
          
        },
        red: { 50: "#fceeee",100:"#ef000e" },
      
        blue_gray: { 100: "#cbcaca" ,200:"#377d8e"},
        yellow: { A700: "#ffd600" },
        blue: { 100: "#c9eeff" },
        lime: { 800: "#8a8c30" },
        green_900: "#008000",
        teal: { A100_99: "#a4ffde99" },
        green: { "900_cc": "#008000cc", "900_33": "#00800033" },
        teal1: { 400: "#308c76" },
        teal2: { 400: "#2290a8", "400_01": "#218fa8" },
        bg1:{20:"#D8F2F3"}
      },
      boxShadow: {
        bs: "10px 10px  10px 10px #0000003f",
        bs1: "0px 0px  26px 10px #0000003f",
        bs2: "0px 0px  7px 7px #84848499 ",
      },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
      textShadow: { ts: "5px 5px  4px #ffffff3f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
