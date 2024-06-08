<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <h2 class="mb-3">Geral</h2>
            <v-text-field
              label="ID"
              outlined
              v-model="usuario.id"
              readonly
            ></v-text-field>
            <v-text-field
              label="Nome de Usuário"
              outlined
              v-model="usuario.nome_usuario"
              readonly
            ></v-text-field>
            <v-text-field
              label="E-mail"
              outlined
              v-model="usuario.email"
              readonly
            ></v-text-field>
            <v-text-field
              label="Telefone"
              outlined
              v-model="usuario.numero_telefone"
              readonly
              v-mask="'(##) # ####-####'"
            ></v-text-field>
            <v-text-field
              label="Data de Cadastro"
              outlined
              v-model="usuario.data_cadastro"
              readonly
            ></v-text-field>
            <v-text-field
              label="Nome Completo"
              outlined
              v-model="usuario.nome_completo"
              readonly
            ></v-text-field>
            <v-text-field
              label="Nome Completo"
              outlined
              v-model="usuario.cpf"
              readonly
            ></v-text-field>
            <h2 class="mb-3">Plano</h2>
            <v-text-field
              label="Nome"
              outlined
              v-model="plano.nome"
              readonly
            ></v-text-field>
            <v-text-field
              label="Valor"
              outlined
              v-model="plano.valor"
              readonly
              v-money="money"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { VMoney } from 'v-money'
  export default {
    name: 'MinhaConta',
    directives: { money: VMoney },
    data: () => ({
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      },
    }),
    computed: {
      usuario () {
        return this.$store.getters.usuario
      },
      plano () {
        return this.$store.getters.plano
      }
    }
  }
</script>
