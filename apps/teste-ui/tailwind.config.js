// import flowbite from 'flowbite-react/tailwind';
import { tailwind } from '@nebula/ui'
import { colors } from '@nebula/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
    tailwind.content({
      base: '../../'
    })
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
}
