<template>
  <v-app>
    <home-side-panel v-model="drawer" />

    <v-app-bar fixed app short color="wall" clipped-left clipped-right elevation-3>
      <v-app-bar-nav-icon color="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" class="text--text text-capitalize">
          {{ $t("navTitile") }}
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <change-lang />
    </v-app-bar>

    <v-main class="wall lighten-1">
      <v-container class="mt-16">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ChangeLang from "./components/ChangeLang.vue";
import HomeSidePanel from "./components/HomeSidePanel.vue";
export default {
  name: "App",
  components: { HomeSidePanel, ChangeLang },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
