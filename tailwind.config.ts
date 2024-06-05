import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto-condensed': ['var(--font-roboto-condensed)'],
        mont: ['var(--font-montserrat)'],
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '32': '32px',
        '40': '40px',
      },
      boxShadow: {
        'shadow-sm': '0px 4px 6px -2px rgba(0, 0, 0, 0.08)',
        'shadow-md': '0px 12px 16px -4px rgba(0, 0, 0, 0.14)',
      },
    },
    screens: {
      mobile: '360px',
      // => @media (min-width: 360px) { ... }
      'big-mobile': '500px',
      // => @media (min-width: 360px) { ... }
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      white: '#FFFFFF',
      beige: '#F7F5E6',
      blue: {
        light: '#52658F',
        default: '#022E66',
        dark: '#333A56',
      },
      grey: {
        light: '#E8E8E8',
        dark: '#0A1A2A',
      },
      black: '#000000',
    },
  },
  plugins: [],
}
export default config
