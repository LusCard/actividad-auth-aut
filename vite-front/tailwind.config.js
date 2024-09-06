// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.js", "./src/*.js"],
  theme: {
    extend: {
      colors: {
        "black-200": "#333", // Define your custom color
        "black-300": "#222", // Another custom color
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
