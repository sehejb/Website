const {heroui} = require('@heroui/theme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/form.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
