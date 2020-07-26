module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: "Lato",
      serif: "Lora",
      display: "Cardo",
      body: "Lora",
    },
    extend: {
      colors: {
        brand: "#656f71",
        laccent: "#8e9e87",
        daccent: "#5e726e",
        light: "#ccbf90",
        dark: "#68534f",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
