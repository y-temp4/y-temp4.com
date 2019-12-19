const openColors = require('open-color/open-color.json')

const colors = {}

Object.entries(openColors).forEach(([color, values]) => {
  if (['white', 'black'].includes(color)) return
  colors[color] = { ...values }
})

module.exports = {
  theme: {
    extend: {
      colors
    },
    colors: {
      body: 'var(--color-body)',
      wrapper: 'var(--color-wrapper)',
      link: 'var(--color-link)',
      text: 'var(--color-text)',
      'title-border': 'var(--color-title-border)',
      warn: 'var(--color-warn)',
      white: '#ffffff'
    }
  }
}
