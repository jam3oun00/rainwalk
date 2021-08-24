import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: ["@/assets/sass/variables.scss"],
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#27a0d3",
        wall: "#073045",
        text: "#fff",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      light: {
        primary: "#27a0d3",
        wall: "#f1f2f4",
        text: "#222",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
