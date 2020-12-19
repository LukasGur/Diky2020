export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Díky 2020 | Poděkuj a šiř pozitivní náladu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Šiř pozitivní náladu a podpoř ty, kteří to potřebují. Projekt vznikl na podporu samoživitelek a seniorů v nouzi.' },
      { name: 'msapplication-TileColor', content: '#fff0e8' },
      { name: 'msapplication-config', content: '/logo/browserconfig.xml' },
      { name: 'theme-color', content: '#ff0000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo/favicon-16x16.png' },
      { rel: 'manifest', href: '/logo/site.webmanifest' },
      { rel: 'mask-icon', href: '/logo/safari-pinned-tab.svg" color="#e66d45' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    hideBadge: true,
    language: 'cs',
    siteKey: '6Lf86gsaAAAAAIycG0yPBjgcjAyE6JDE0ypld5yF',
    version: 2,
    size: 'invisible'
  },

  styleResources: {
    scss: '~/assets/scss/*.scss'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  content: {
    // Options
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  generate: {
    subFolders: false,
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
