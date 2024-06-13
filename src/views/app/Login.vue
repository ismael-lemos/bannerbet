<template>
  <v-container
    style="
      justify-content: center;
      align-items: center;
      display: flex;
      height: 100%;
    "
    >
    <v-row class="text-center">
      <v-col cols="12"
        style="
          justify-content: center;
          align-items: center;
          display: flex;
        "
      >
        <v-card style="width: 50%;">
          <v-card-title>
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="nome_usuario"
              label="Nome de Usuário"
              outlined
              required
              :rules="[v => !!v || 'Insira seu nome de usuário!']"
            ></v-text-field>
            <v-text-field
              v-model="senha"
              label="Senha"
              outlined
              :type="mostrar ? 'text' : 'password'"
              :append-icon="mostrar ? 'visibility' : 'visibility_off'"
              required
              :rules="[v => !!v || 'Insira sua senha!']"
              @click:append="mostrar = !mostrar"
            ></v-text-field>
            <v-btn color="secondary" rounded class="mb-4" @click="$router.push('/cadastro')">
              Criar Conta
            </v-btn>
          </v-card-text>
          <v-card-actions class="pa-0 ma-0">
            <v-btn color="success" block large>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'UserLogin',

    data: () => ({
      nome_usuario: '',
      senha: '',
      mostrar: false
    }),
  }
</script>
