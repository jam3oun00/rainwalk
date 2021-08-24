module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ar",
      localeDir: "locales",
      enableInSFC: false,
    },
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/sass/index.scss"`,
      },
    },
  },
};
