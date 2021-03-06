module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./src/**/*.js", "./public/**/*.html"],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "250px": "250px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
