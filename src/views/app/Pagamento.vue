<template>
  <v-container style="background-color: white;">
    <v-stepper v-model="step" style="box-shadow: none;">
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-row>
            <v-col cols="12">
              <h2>Escolha um meio de pagamento</h2>
              <p>Escolha um dos meios de pagamento disponíveis abaixo:</p>
            </v-col>
            <v-col cols="2">
              <v-card color="teal" height="22em">
                <v-card-text
                  class="text-center"
                  style="
                    height: 22em;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                  "
                  @click="step = 2"
                >
                  <v-icon size="200" color="white">pix</v-icon>
                  <h2
                    style="font-weight: 900;
                            color: white;
                    "
                    class="mb-4"
                  >
                    PIX
                  </h2>
                  <h5
                    class="white--text"
                    style="font-size: 1.0em;"
                  >
                    Liberação automatica
                  </h5>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-card color="teal" height="22em">
                <v-card-text
                  class="text-center"
                  style="
                    height: 22em;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                  "
                >
                  <v-icon size="200" color="white">contact_phone</v-icon>
                  <h2
                    style="font-weight: 900;
                            color: white;
                    "
                    class="mb-4"
                  >
                    Fale com atendente
                  </h2>
                  <h5
                    class="white--text"
                    style="font-size: 1.0em;"
                  >
                    A liberação é manual, logo, pode levar algum tempo.
                  </h5>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-row class="mb-4">
            <v-col cols="12">
              <h2>Antes de prosseguir, você deve atualizar o seu plano para um pago.</h2>
            </v-col>
            </v-row>
            <v-row class="justify-space-around mb-1">
              <v-col cols="2">
                <v-btn block @click="step = 1">
                  Cancelar
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn block color="info">
                  Continuar
                </v-btn>
              </v-col>
            </v-row>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
  import { VMoney } from 'v-money'
  export default {
    name: 'UsuarioPagamento',
    directives: { money: VMoney },
    data: () => ({
      step: 1,
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
