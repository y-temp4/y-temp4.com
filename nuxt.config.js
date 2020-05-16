export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: `%s - ${process.env.npm_package_name || ''}`,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://y-temp4.com/icon.png'
      },
      { name: 'theme-color', content: '#339af0' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#339af0' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/style.pcss'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  manifest: {
    lang: 'ja'
  },
  generate: {
    fallback: true
  }
}
