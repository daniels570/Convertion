<template>
  <v-app>
    <DrawerWeb />
    <v-main>
      <Nuxt />
    </v-main>
    <FooterWeb />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultWebLayout',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
.containerFuild {
  padding: 64px 0px 0px 0px;
  background: #607df9;
}
</style>