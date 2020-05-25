module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      'black': '#000',
      'white': '#fff',

      'indigo': {
        100: '#ECEBF0',
        200: '#CECDDA',
        300: '#B1AFC4',
        400: '#777297',
        500: '#3C366B',
        600: '#363160',
        700: '#242040',
        800: '#1B1830',
        900: '#121020',
      },

      'gold': {
        100: '#FFFBE6',
        200: '#FFF5BF',
        300: '#FFEF99',
        400: '#FFE34D',
        500: '#FFD700',
        600: '#E6C200',
        700: '#998100',
        800: '#736100',
        900: '#4D4100',
      },

      'green': {
        100: '#FFFBE6',
        200: '#FFF5BF',
        300: '#FFEF99',
        400: '#FFE34D',
        500: '#FFD700',
        600: '#E6C200',
        700: '#998100',
        800: '#736100',
        900: '#4D4100',
      },
      'gray': {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
