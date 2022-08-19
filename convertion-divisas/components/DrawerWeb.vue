<template>
  <div>
    <v-navigation-drawer v-show="$vuetify.breakpoint.mobile" v-model="drawer" :mini-variant="miniVariant"
      :clipped="clipped" fixed app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <!--<Logo width-image="50%" />-->
            </v-list-item-title>
            <v-list-item-subtitle>
              Divisas
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-show="$vuetify.breakpoint.mobile" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-progress-linear :active="loading" :indeterminate="loading" absolute bottom color="deep-purple accent-4">
      </v-progress-linear>
    </v-app-bar>
    <v-app-bar v-show="!$vuetify.breakpoint.mobile" :clipped-left="clipped" fixed app justify="space-around">
      <v-toolbar-title>Divisas</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn v-for="(item, i) in items" :key="i" :to="item.to" class="ma-4" :color="item.color" outlined>{{ item.title
      }}</v-btn>
      <v-progress-linear :active="loading" :indeterminate="loading" absolute bottom color="deep-purple accent-4">
      </v-progress-linear>
    </v-app-bar>
    <ModalAlert />
    <ModalProgress />
  </div>
</template>
<script>
import ModalAlert from "@/components/ModalAlert";
import ModalProgress from "@/components/ModalProgress";
export default {
  components: {
    ModalAlert,
    ModalProgress
  },
  name: 'WebDrawer',
  data() {
    return {
      loading: false,
      miniVariant: false,
      clipped: false,
      items: [
        {
          icon: 'home',
          title: 'Inicio',
          to: '/',
          color: 'indigo',
        }
      ],
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.$store.commit('drawer', val)
      },
    },
  },
  watch: {
    loading(val) {
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    },
  },
  updated() {
    const screen = this.$vuetify.breakpoint.mobile

    if (!screen) {
      this.$store.commit('drawer', false)
    }
  },
}
</script>