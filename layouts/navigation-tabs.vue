<template>
  <v-app>
    <img
      src="~/assets/img/water-drop-design.svg"
      class="floating-water-drop d-none d-md-block"
    />
    <v-row class="fill-height" no-gutters>
      <v-col cols="12" md="4" lg="3">
        <r-tabs-manager class="r-tabs-manager" />
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
.side-wall-design {
  width: 100%;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  width: 100%;

  &-mobile {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 0;
    z-index: 0;
  }
}
.side-wall-logo {
  width: 100%;
  position: absolute;
  z-index: 3;
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
    &:not(.v-divider--vertical) {
      width: 43px;
      height: 3px;
      max-height: 3px;
      // margin: auto;
    }

    &.v-divider--vertical {
      max-width: 3px;
      width: 3px;
      height: 43px;
    }
  }
}
</style>
