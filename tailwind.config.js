module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px' // => @media (min-width: 1536px) { ... }

      },
      colors: {
        text: {
          lighter: "#CED3DA",
          darker: "#515D70",
          faded: "#ABB1BA",
          link: "#959EAD",
          active: "#404B5A"
        },
        border: {
          "DEFAULT": "#E3E8EF"
        },
        background: {
          lighter: "#FEFFFF",
          "DEFAULT": "#F2F5FA",
          darker: "#404B5A"
        },
      },
    },
  },
  plugins: ['postcss-import', 'tailwindcss/nesting', 'tailwindcss']
}
