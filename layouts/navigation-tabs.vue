<template>
  <v-app>
    <img src="~/assets/img/water-drop-design.svg" class="floating-water-drop" />
    <v-row class="fill-height" no-gutters>
      <v-col cols="12" md="4" lg="3">
        <v-card flat tile class="lightGrey fill-height overflow-hidden">
          <v-row class="py-0 saide-wall-logo text-center" no-gutters>
            <v-col class="d-flex justify-center">
              <img src="~/assets/img/logo.svg" />
            </v-col>
            <v-col cols="12" class="mt-12">
              <v-btn
                icon
                x-large
                nuxt
                to="/"
                active-class="primary white--text"
              >
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
          <img
            src="~/assets/img/saide-wall-design.svg"
            class="saide-wall-design"
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="8" lg="9">
        <v-card
          flat
          tile
          style="min-height: 100%"
          class="d-flex align-center justify-center transparent"
        >
          <v-container>
            <v-main class="py-10">
              <Nuxt />
            </v-main>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.floating-water-drop {
  position: absolute;
  top: -11rem;
  right: -5rem;
  opacity: 0.25;
  height: 817px;
  z-index: 0;
}
.saide-wall-design {
  width: 100%;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  width: 100%;
}
.saide-wall-logo {
  width: 100%;
  position: absolute;
  top: 47px;
  a,
  button {
    background-color: white;
    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
  .v-divider {
    border: none;
    background-color: white;
    opacity: 1;
    max-width: 3px;
    width: 3px;
    height: 43px;
  }
}
</style>
