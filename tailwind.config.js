/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customViolet: "#9D3CFF",
        customDark: "#2D2D2D",
        customSemiWhite: "#f1f6fa",
        customMainBlue: "#0973BA",
        customGreen: "rgba(77, 223, 171, 0.6)",

        customBlue: "#21d1ff",
        customDarkViolet: "#588cfe",
        customPink: "#9e3cff",
      },
    },
  },
  plugins: [],
};
