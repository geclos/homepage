import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F4F1E7',
        ink: '#1E1D18',
        muted: '#6C665A',
        line: '#DED6C4',
        accent: '#1C6B9D',
        paper: '#FAF8F1'
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Times New Roman"', 'serif'],
        sans: ['"Inter Tight"', '"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      letterSpacing: {
        wideish: '0.24em'
      },
      boxShadow: {
        soft: '0 20px 50px -30px rgba(30, 29, 24, 0.35)'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink'),
            maxWidth: 'none',
            a: {
              color: theme('colors.ink'),
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '4px',
              '&:hover': {
                color: theme('colors.accent')
              }
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(',')
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(',')
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(',')
            },
            blockquote: {
              borderLeftColor: theme('colors.line'),
              color: theme('colors.ink')
            },
            code: {
              backgroundColor: theme('colors.paper'),
              padding: '0.2em 0.35em',
              borderRadius: '0.25rem'
            },
            pre: {
              backgroundColor: theme('colors.paper'),
              border: `1px solid ${theme('colors.line')}`
            }
          }
        }
      })
    }
  },
  plugins: [typography]
};
