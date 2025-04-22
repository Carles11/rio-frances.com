/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

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
      ...colors,
      primary: colors.orange,
      secondary: colors.red,
      sky: colors.sky, // Updated from lightBlue
      stone: colors.stone, // Updated from warmGray
      neutral: colors.neutral, // Updated from trueGray
      gray: colors.gray, // Updated from coolGray
      slate: colors.slate, // Updated from blueGray
    },
  },
  plugins: [],
}
