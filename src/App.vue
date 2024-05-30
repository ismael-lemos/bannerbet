<template>
  <v-app style="background-color: #141F2C">
    <App-Bar/>
    <v-main>
      <v-alert
        :type="alerta.tipo"
        v-model="alerta.ativo"
      >
          {{ alerta.texto }}
      </v-alert>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
export default {
  name: 'App',
  props: {
    source: String
  },
  components: {
    AppBar
  },

  data: () => ({
    //
  }),
  computed: {
    alerta () {
      return this.$store.getters.alerta
    }
  }
};
</script>
