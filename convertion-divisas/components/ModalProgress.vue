<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>!-->
    <v-card>
      <v-card-title class="enter">
        <span class="headline">Cargando...</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="text-xs-center">
        <v-container grid-list-md>
          <div class="text-center">
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    dialog: {
      get() {
        return this.$store.state.progress;
      }
    },
  },
};
</script>

<style>
</style>