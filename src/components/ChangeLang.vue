<template>
  <div>
    <v-select
      class="primary"
      v-model="$i18n.locale"
      :items="locales"
      dark
      @change="onChange"
      item-value="code"
      item-text="name"
      filled
      hide-details
      dense
      style="max-width: 160px;"
    />
  </div>
</template>

<script>
export default {
  computed: {
    locales() {
      return Object.keys(this.$i18n.messages);
    },
  },
  methods: {
    onChange(locale) {
      if (locale) {
        console.log(locale);
        locale === "ar"
          ? (this.$vuetify.rtl = true)
          : (this.$vuetify.rtl = false);
        localStorage.setItem("locale", locale.toString());
      }
    },
  },
  async created() {
    const locale = localStorage.getItem("locale");
    if (locale) {
      this.$i18n.locale = locale;
      locale === "ar"
        ? (this.$vuetify.rtl = true)
        : (this.$vuetify.rtl = false);
    }
  },
  mounted() {
    console.log(this.$i18n.locale);
  },
};
</script>

<style lang="scss" scoped></style>
