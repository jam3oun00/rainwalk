<template>
  <div>
    <h2 class="text-center primary--text mb-10">Your information</h2>
    <v-form class="main-widget" v-model="isFormValid">
      <v-row>
        <!--  -->
        <v-col cols="12" md="6">
          <h3>Your Name:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.name"
            :rules="[v => !!v || 'Name is required']"
            outlined
            dense
          />
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Mailing Address:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.address"
            :rules="[v => !!v || 'Mailing Address is required']"
            outlined
            dense
          />
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Email:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.email"
            :rules="emailRules"
            type="email"
            outlined
            dense
          />
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Phone Number:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.phoneNumber"
            :rules="[v => !!v || 'Phone Number is required']"
            type="number"
            outlined
            dense
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: "navigation-tabs",
  data() {
    return {
      form: {
        name: "",
        address: "",
        email: "",
        phoneNumber: ""
      },
      isFormValid: false,
      regexValidEmail: new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
      emailRules: [
        v => !!v || "E-mail is required",
        v => this.regexValidEmail.test(v) || "E-mail must be valid",
        v => v.length <= 200 || "E-mail is too long"
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
