<template>
  <div>
    <v-navigation-drawer
      color="wall"
      v-model="drawer"
      fixed
      clipped
      app
      :right="$i18n.locale === 'ar'"
    >
      <confirm
        v-model="logout"
        ref="confirm"
        msg="are you sure you want to log out?"
        @confirm="logout = false"
      />
      <v-list dense>
        <v-list-item-group v-model="group" active-class="primary--text">
          <!--  -->
          <v-list-item class="mb-1" link to="/">
            <v-list-item-title>
              {{$t('home')}}
            </v-list-item-title>
          </v-list-item>
          <!--  -->
          <v-list-group prepend-icon="mdi-flag">
            <template #activator>
              <v-list-item-title>{{ $t("categories") }}</v-list-item-title>
            </template>
            <v-list-item link to="/sub-page">
              <v-list-item-title>
                {{ $t("subPage") }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <!--  -->
          <v-list-group prepend-icon="mdi-account">
            <template #activator>
              <v-list-item-title>{{ $t("setting") }}</v-list-item-title>
            </template>
            <v-list-item>
              <v-list-item-title>
                <v-switch
                  class="mx-3"
                  @change="toggleMode"
                  v-model="switcher"
                  :label="switcher ? $t('dark') : $t('light')"
                />
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <!--  -->
        </v-list-item-group>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn rounded block color="primary" @click="logout = true">
            {{ $t("logout") }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Confirm from "./Confirm.vue";
export default {
  components: { Confirm },
  props: {
    value: Boolean,
  },
  data() {
    return {
      switcher: false,
      logout: false,
      group: [],
    };
  },
  computed: {
    drawer: {
      get: function() {
        return this.value;
      },
      set: function(v) {
        this.$emit("input", v);
      },
    },
  },
  methods: {
    toggleMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  async created() {
    const darTheme = localStorage.getItem("dark_theme");
    if (darTheme && darTheme == "true") {
      this.$vuetify.theme.dark = await true;
      this.switcher = await true;
    } else {
      this.$vuetify.theme.dark = await false;
      this.switcher = await false;
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.drawer = this.value;
    });
  },
};
</script>

<style lang="scss" scoped></style>
