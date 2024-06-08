<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-actions>
            <v-icon size="200">pix</v-icon>
            <h2>PIX</h2>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { VMoney } from 'v-money'
  export default {
    name: 'UsuarioPagamento',
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
