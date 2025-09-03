/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: {
          xs: '1.25rem',   // ~20px
          sm: '1.5rem',    // ~24px
          md: '2rem',      // ~32px
          lg: '2.25rem',   // ~36px
          xl: '2.5rem',    // ~40px
          
        },
        subHeading: {
          xs: '1rem',
          sm: '1.2rem',
          md: '1.4rem',
          lg: '1.5rem',
          xl: '1.8rem',
        },
        subHeading2: {
          xs: '1rem',
          sm: '1.2rem',
          md: '1.4rem',
          lg: '1.5rem',
          xl: '1.6rem',
          // '2xl': '1.7rem'
        },
        para: {
          xs: '0.9rem',
          sm: '1rem',
          md: '1.1rem',
          lg: '1.2rem',
          xl: '1.3rem',
          // '2xl': '1.4rem'
        },
      },
      spacing: {
        // Padding Horizontal (Left & Right)
        'px-xs': '0.5rem',
        'px-sm': '1rem',
        'px-md': '1.5rem',
        'px-lg': '2rem',
        'px-xl': '3rem',
        'px-2xl': '4rem',

        // Padding Vertical (Top & Bottom)
        'py-xs': '0.5rem',
        'py-sm': '1rem',
        'py-md': '1.5rem',
        'py-lg': '2rem',
        'py-xl': '3rem',
        'py-2xl': '4rem',

        // Individual paddings
        'pt-xs': '0.5rem',
        'pt-sm': '1rem',
        'pt-md': '1.5rem',
        'pt-lg': '2rem',
        'pt-xl': '3rem',
        'pt-2xl': '4rem',

        'pb-xs': '0.5rem',
        'pb-sm': '1rem',
        'pb-md': '1.5rem',
        'pb-lg': '2rem',
        'pb-xl': '3rem',
        'pb-2xl': '4rem',

        'pl-xs': '0.5rem',
        'pl-sm': '1rem',
        'pl-md': '1.5rem',
        'pl-lg': '2rem',
        'pl-xl': '3rem',
        'pl-2xl': '4rem',

        'pr-xs': '0.5rem',
        'pr-sm': '1rem',
        'pr-md': '1.5rem',
        'pr-lg': '2rem',
        'pr-xl': '3rem',
        'pr-2xl': '4rem',
      },
      colors: {
        green: '#20b024',
        white: "#FFFFFF",
        yellow: "#FFDD02",
        black: "#000000",
        bodyColor: "#0d0d0d",
        grey: "#9d9d9d",
        lightblue: "#4fa7ff",
        darkblue: "#021445",
        darkpink: "#f54eb8",
        lightgreen: "#9dd15a",
      },
      boxShadow: {
        yellowBottom: "0 4px 0 #FFDD02",
        yellowHover: "0 6px 12px #b5a74e",
        yellowActive: "0 2px 4px #b5a74e",
      },
      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // Custom Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      // Custom Transitions
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },

      // Custom Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
