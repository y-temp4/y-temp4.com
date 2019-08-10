export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
      { name: 'theme-color', content: '#339af0' }
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
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
  devModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa']
}
