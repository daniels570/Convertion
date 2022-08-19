<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>!-->
    <v-card :color="type" dark dense>
      <v-card-title class="text-h5">
        Mensaje
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="text-xs-center">
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              {{ data }}
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn small :color="type" dark @click="dialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    dialog: {
      get() {
        return this.$store.state.modalAlert.active;
      },
      set(val) {
        let payload = {
          active: val,
          type: "default",
          data: null,
        };
        this.$store.commit("modalAlert", payload);
      },
    },
    type: {
      get() {
        return this.$store.state.modalAlert.type;
      },
    },
    data: {
      get() {
        return this.$store.state.modalAlert.data;
      },
    },
  },
};
</script>

<style>
</style>