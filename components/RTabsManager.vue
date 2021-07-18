<template>
  <v-card
    flat
    tile
    class="lightGrey fill-height overflow-hidden"
    :style="$vuetify.breakpoint.mdAndUp ? false : 'height: 12rem'"
  >
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-row class="py-0 side-wall-logo text-center" no-gutters>
        <v-col class="d-flex justify-center">
          <img src="~/assets/img/logo.svg" />
        </v-col>
        <v-col cols="12" class="mt-12">
          <v-btn icon x-large nuxt to="/" active-class="primary white--text">
            1
          </v-btn>
        </v-col>
        <v-col cols="12" class="my-3">
          <v-divider vertical />
        </v-col>
        <v-col cols="12">
          <v-btn icon x-large>2</v-btn>
        </v-col>
        <v-col cols="12" class="my-3">
          <v-divider vertical />
        </v-col>
        <v-col cols="12">
          <v-btn icon x-large>3</v-btn>
        </v-col>
      </v-row>
      <img src="~/assets/img/side-wall-design.svg" class="side-wall-design" />
    </template>
    <template v-else>
      <v-row class="py-0 side-wall-logo text-center pl-6" no-gutters>
        <v-col cols="12" class="d-flex justify-start">
          <img src="~/assets/img/logo.svg" />
        </v-col>
        <div class="d-flex align-center mt-8">
          <v-btn icon large nuxt to="/" active-class="primary white--text">
            1
          </v-btn>
          <v-divider class="mx-3" />
          <v-btn icon large>2</v-btn>
          <v-divider class="mx-3" />
          <v-btn icon large>3</v-btn>
        </div>
      </v-row>
      <img
        src="~/assets/img/side-wall-design-mobile.svg"
        class="side-wall-design-mobile"
      />
    </template>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
