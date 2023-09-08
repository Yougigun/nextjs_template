/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'iphone8': '375px',
      // => @media (min-width: 375px) { ... }
      // 'phone': '480px',
      // temp
      'phone': '1400px',

      // => @media (min-width: 480px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      "md": "769px",
      // => @media (min-width: 768px) { ... }
      "ipadmini": "769px",
      // => @media (min-width: 768px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      // order matters
      'max-laptop': { 'max': '1023px' },
      // => @media (max-width: 1280px) { ... }
      'max-md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }
      'max-tablet': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'max-ipadmini': { 'max': '767px' },
      // => @media (max-width: 639px) { ... }
      // 'max-phone': { 'max': '479px' },
      'max-phone': { 'max': '1400px' },

      // => @media (max-width: 479px) { ... }
      'max-iphone8': { 'max': '374px' },
      // => @media (max-width: 374px) { ... }
    },
  },
  plugins: [],
}
