import { NuxtConfig } from '@nuxt/types'

const isProduction = process.env.NODE_ENV === 'production'

const script = []

if (isProduction) {
  script.push({
    src: 'https://static.cloudflareinsights.com/beacon.min.js',
    defer: true,
    'data-cf-beacon': '{"token": "102eea8f71994077a8e5453a190fe9c3"}'
  })
}

const config: NuxtConfig = {
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: `%s - ${process.env.npm_package_name || ''}`,
    htmlAttrs: { lang: 'ja' },
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
      { name: 'theme-color', content: '#339af0' },
      { name: 'twitter:site', content: '@y_temp4' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script
  },
  loading: { color: '#339af0' },
  css: ['~/assets/css/style.pcss'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/typescript-build'],
  modules: ['@nuxtjs/pwa'],
  manifest: { lang: 'ja' },
  generate: { fallback: true },
  tailwindcss: { jit: true }
}

export default config
