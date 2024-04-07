/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "60rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['dracula','winter'],
  },
};
