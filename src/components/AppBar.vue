<template>
    <v-app-bar
      app
      color="#101923"
      dark
      height="80em"
    >
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-btn
          icon
          @click="$emit('ativarMenu')"
        >
          <v-icon size="40">menu</v-icon>
        </v-btn>
        <v-img
          alt="Logo da BannerBet"
          class="shrink ml-4"
          contain
          :src="require('@/assets/bannerbet.png')"
          transition="scale-transition"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <template v-if="!usuario">
        <v-btn class="mr-3" @click="$router.push('/cadastro')" color="white" style="color: #101923">
          Criar Conta
        </v-btn>
        <v-btn @click="$router.push('/login')" color="white" style="color: #101923">
          Logar
        </v-btn>
      </template>
      <template v-else>
        <h4 class="mr-4">Olá {{ usuario.nome_usuario }}</h4>
        <v-btn class="mr-3" color="white" style="color: #101923">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn @click="encerrarSessao()" color="white" style="color: #101923">
          Sair
        </v-btn>
      </template>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    encerrarSessao () {
      this.$store.dispatch('encerrarSessao').then(() => {
        if (this.$route.path !== '/') this.$router.push('/')
      })
    }
  },
  computed: {
    usuario () {
      return this.$store.getters.usuario
    }
  }
}
</script>

<style scoped>
  h5 {
    color: white;
  }
</style>
