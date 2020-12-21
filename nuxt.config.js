export default {
  target: 'static',
  // server: {
  //   port: 8000,
  //   host: '0.0.0.0'
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Díky 2020 | Poděkuj a šiř pozitivní náladu',
    htmlAttrs: { lang: 'cs' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Šiř pozitivní náladu a podpoř ty, kteří to potřebují. Projekt vznikl na podporu samoživitelek a seniorů v nouzi.' },
      { name: 'msapplication-TileColor', content: '#fff0e8' },
      { name: 'msapplication-config', content: '/logo/browserconfig.xml' },
      { name: 'theme-color', content: '#ff0000' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Díky 2020!' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/Komu_za_rok_2020_poděkujete_vy.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Díky za krásné léto, lásko. | Děkuji Martine, že jsi mi pomohl v nové práci. | A komu popřejete vy?' },
      { hid: 'og:title', property: 'og:title', content: 'Díky 2020!' },
      { hid: 'og:image', property: 'og:image', content: '/Komu_za_rok_2020_poděkujete_vy.png' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: '/Komu_za_rok_2020_poděkujete_vy.png' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Díky za krásné léto, lásko. | Děkuji Martine, že jsi mi pomohl v nové práci. | A komu popřejete vy?' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '940' },
      { hid: 'og:image:height', property: 'og:image:height', content: '788' }
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
    '@nuxtjs/recaptcha',
    'vue-social-sharing/nuxt',
    'nuxt-clipboard2'
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
    postcss: {
      plugins: {
        autoprefixer: {
          flexbox: true
        },
        cssnano: {}
      }
    }
  },

  generate: {
  }
}
