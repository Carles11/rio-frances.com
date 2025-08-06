/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

// Remove deprecated colors to avoid warnings
const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...validColors } =
  colors

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Radial gradient background
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Conic gradient background
      },
    },
    colors: {
      ...validColors,
      primary: colors.orange,
      secondary: colors.red,
    },
  },
  plugins: [],
}
