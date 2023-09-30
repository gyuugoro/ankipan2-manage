export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // target: 'static',
  // ssr: false,
  ssr: false,

  target: "static",


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ankipan2-manage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '単語帳アプリ' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Russo+One&display=swap" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
      theme_color: "#ffffff",
      start_url: "/",
      orientation: "any",
    },
    meta: {
      ogHost: "https://ankipan2-manage.vercel.app/",
      ogImage: {
        path: "https://ankipan2-manage.vercel.app/icon.png"
      },
      twitterCard: "summary",
      twitterSite: "@sho1216_",
      mobileAppIOS: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    fb_api_key: process.env.FB_API_KEY,
    fb_auth_domain: process.env.FB_AUTH_DOMAIN,
    fb_project_id: process.env.FB_PROJECT_ID,
    fb_storage_bucket: process.env.FB_STORAGE_BUCKET,
    fb_messaging_sender_id: process.env.FB_MESSAGING_SENDER_ID,
    fb_app_id: process.env.FB_APP_ID,
    fb_measurement_id: process.env.FB_MEASUREMENT_ID
  }

}
