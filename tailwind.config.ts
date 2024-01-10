import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      backgroundImage: {
        mobile: 'url(/bg-mobile.jpg)',
        mobileLight: 'url(/bg-mobile-light.jpg)',
        desktop: 'url(/bg-desktop.jpg)',
        desktopLight: 'url(/bg-desktop-light.jpg)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
