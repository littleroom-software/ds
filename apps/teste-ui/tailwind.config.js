// import flowbite from 'flowbite-react/tailwind';
import { tailwind } from '@nebula/ui'

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
        "background": "#FFFFFF",
        "foreground": "#0A0A0A",
        "card": "#FFFFFF",
        "card-foreground": "#0A0A0A",
        "popover": "#FFFFFF",
        "popover-foreground": "#0A0A0A",
        "primary": "#CC3333",
        "primary-foreground": "#FFEAEA",
        "secondary": "#F5F5F5",
        "secondary-foreground": "#171717",
        "muted": "#F5F5F5",
        "muted-foreground": "#737373",
        "accent": "#F5F5F5",
        "accent-foreground": "#171717",
        "destructive": "#E60000",
        "destructive-foreground": "#FAFAFA",
        "border": "#E5E5E5",
        "input": "#E5E5E5",
        "ring": "#CC3333",
        // "radius": "0.5rem",
        "chart-1": "#FF6347",
        "chart-2": "#339999",
        "chart-3": "#266D75",
        "chart-4": "#FFDB58",
        "chart-5": "#FFBF00"
      }
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
}
