/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
        white: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        "primary-font": ["League Spartan", "sans-serif"],
      },

      fontSize: {
        "big-text-size": "clamp(2.25rem,3.5vw,5rem)",
        "normal-text-size": "clamp(1rem,.5vw,3rem)",
      },
    },
  },
  plugins: [],
};

