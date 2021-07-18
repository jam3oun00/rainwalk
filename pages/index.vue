<template>
  <div>
    <h2 class="text-center primary--text mb-10">Your information</h2>
    <v-form class="main-widget" v-model="isFormValid">
      <v-row no-gutters>
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

      <!--  -->
      <h2 class="text-center primary--text mb-8 mt-5">
        Your pet’s information
      </h2>
      <!--  -->

      <!--  -->
      <v-row no-gutters>
        <!--  -->
        <v-col cols="12" md="6">
          <h3>Pet’s Name:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.petName"
            :rules="[v => !!v || 'Pet’s Name is required']"
            outlined
            dense
          />
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Do you have a:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-radio-group v-model="form.type" class="mb-3">
            <div class="d-flex justify-end align-center mr-n2">
              <v-radio color="lightGrey darken-4" label="Dog" />
              <span class="mx-3"></span>
              <v-radio color="lightGrey darken-4" label="Cat" />
            </div>
          </v-radio-group>
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Is your pet:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-radio-group v-model="form.gender" class="mb-3">
            <div class="d-flex justify-end align-center mr-n2">
              <v-radio color="lightGrey darken-4" label="Male" />
              <span class="mx-3"></span>
              <v-radio color="lightGrey darken-4" label="Female" />
            </div>
          </v-radio-group>
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Your pet’s breed?:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            :items="items"
            v-model="form.breed"
            append-icon="mdi-chevron-down"
            :rules="[v => !!v || 'Please select an item']"
            placeholder="Select Breed"
            dense
            outlined
          ></v-select>
        </v-col>

        <!--  -->
        <v-col cols="12" md="6">
          <h3>Your pet’s age?:</h3>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            :items="items"
            v-model="form.breed"
            append-icon="mdi-chevron-down"
            :rules="[v => !!v || 'Please select an item']"
            placeholder="Select Age"
            dense
            outlined
          ></v-select>
        </v-col>

        <!--  -->
        <v-btn color="secondary" class="mx-auto mt-10" large>Get your quote</v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: "navigation-tabs",
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      form: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        petName: "",
        type: "",
        gender: "",
        breed: ""
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

<style lang="scss"></style>
