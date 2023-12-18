import type { Config } from 'tailwindcss'

function generateSpacing(): { [key: string]: string } {
  const spacing: { [key: string]: string } = {
    '0.7p': '0.7%',
    '1p': '1%',
    '30p': '30%',
    '5.3p': '5.3%',
    '6.6p': '6.6%',
    '7p': '7%',
    '8.75p': '8.75%',
    '9.2p': '9.2%',
    '7.5p': '7.5%',
    '8p': '8%',
    '8.8p': '8.8%',
    '9p': '9%',
    '12p': '12%',
    '14p': '14%',
    '14.2p': '14.2%',
    '16p': '16%',
    '18.7p': '18.7%',
    '20p': '20%',
    '24p': '24%',
    '26p': '26%',
    '27p': '27%',
    '29p': '29%',
    '29.6p': '29.6%',
    '36p': '36%',
    '36.8p': '36.8%',
    '38p': '38%',
    '40p': '40%',
    '42.6p': '42.6%',
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
        '68p': '68%',
        '80p': '80%',
        '40p': '40%',
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
        '1.25p': '1.1rem',
        '1.5p': '1.5rem', //24
        '2p': '1.875rem', //30
        '4p': '3.5rem', //60
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
