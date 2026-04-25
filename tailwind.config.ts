import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fdfaf3',
        ink: '#1a1a1a',
        muted: '#6b6b6b',
        line: '#e8e1d2',
        accent: '#b25b3e',
        'accent-soft': '#fbe8de',
        chip: '#f1ead9',
        tried: '#2d6a4f',
        'tried-soft': '#d8ebe0',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
