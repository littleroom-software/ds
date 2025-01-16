// import flowbite from 'flowbite-react/tailwind';
import { tailwind } from "@littleroom-ui/react";
import { colors } from "@littleroom-ui/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    tailwind.content({
      base: "../../",
    }),
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
};
