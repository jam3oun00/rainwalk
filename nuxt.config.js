export default {
  ssr: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - rainwalk",
    title: "rainwalk",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/sass/index.scss"],

  styleResources: {
    scss: ["~/assets/sass/variables.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/style-resources"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-webfontloader"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/sass/variables.scss"],
    treeShake: true,
    theme: {
      options: { customProperties: true },
      themes: {
        light: {
          primary: "#155F6E",
          accent: "#57B894",
          secondary: "#B8567B",
          lightGrey: "#DADADA",
          info: "#FFF",
          warning: "#FFF",
          error: "#B8567B",
          success: "#FFF"
        }
      }
    }
    // defaultAssets: false
  },

  webfontloader: {
    google: {
      families: ["Cabin:200,400,700,800,900"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
