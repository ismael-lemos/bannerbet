<template>
  <v-app style="background-color: #141F2C">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({})
};
</script>
