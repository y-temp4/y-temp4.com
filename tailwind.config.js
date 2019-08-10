const openColors = require('open-color/open-color.json')

const colors = {}

Object.entries(openColors).forEach(([color, values]) => {
  if (['white', 'black'].includes(color)) return
  colors[color] = { ...values }
})

module.exports = {
  theme: {
    extend: { colors }
  },
  variants: {},
  plugins: []
}
