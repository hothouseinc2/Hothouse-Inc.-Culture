module.exports = {
  plugins: [
    require('postcss-cssnext'),
    require('postcss-import'),
    require('cssnano'),
    require('postcss-nested'),
    // require('tailwindcss-aspect-ratio')({
    //   ratios: {
    //     square: [1, 1],
    //     '16-9': [16, 9],
    //     '4-3': [4, 3],
    //     '21-9': [21, 9]
    //   }
    // }),
    require('tailwindcss')('./tailwind.config.js')
  ]
}
