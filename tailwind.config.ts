import type { Config } from 'tailwindcss'

function generateSpacing(): { [key: string]: string } {
  const spacing: { [key: string]: string } = {
    '30p': '30%',
    '7p': '7%',
    '9.2p': '9.2%',
    '7.5p': '7.5%',
    '8p': '8%',
    '9p': '9%',
    '14p': '14%',
    '16p': '16%',
    '24p': '24%',
    '36p': '36%',
    '38p': '38%',
    '40p': '40%',
    '45p': '45%',
    '47p': '47%',
    '80p': '80%',
  }

  for (let i = 28; i <= 900; i += 4) {
    const key = `${i}p`
    if (!spacing[key]) {
      spacing[key] = `${i}%`
    }
  }
  return spacing
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '80p': '80%',
      },
      width: {
        '30p': '30%',
        '20p': '20%',
      },
      height: {
        '45p': '45%',
        '24p': '24%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '2p': '1.875rem',
        '4p': '3.5rem',
      },
      spacing: generateSpacing(),
      fill: {
        current: 'currentColor',
      },
      fontFamily: {
        abhaya: ['Abhaya Libre', 'serif'],
      },
      fontWeight: {
        semibold: '600',
        extrabold: '800',
      },
    },
  },
  plugins: [],
}
export default config
