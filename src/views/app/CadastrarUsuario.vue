<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <v-card v-if="plano">
          <v-card-title>
            <h2>Realizar Cadastro</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Nome de Usuário"
              outlined
            ></v-text-field>
            <v-text-field
              label="E-mail"
              outlined
            ></v-text-field>
            <v-text-field
              label="Telefone"
              outlined
            ></v-text-field>
            <v-text-field
              label="Senha"
              outlined
            ></v-text-field>
            <v-text-field
              label="Repetir Senha"
              outlined
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="success">
              Criar Conta
            </v-btn>
          </v-card-actions>
        </v-card> -->
        <v-card
          color="#182635"
          height="100%"
        >
          <v-layout
            wrap
            justify-space-between¨
            class="white--text"
            style="height: 100%;"
          >
            <v-flex xs12 sm12 md6>
              <div
                class="d-flex align-center justify-center"
                v-if="!planoSelecionado"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                "
              >
                  <v-img
                  alt="Logo da BannerBet"
                  class="shrink ma-2"
                  contain
                  :src="require('@/assets/bannerbet.png')"
                  transition="scale-transition"
                  width="350"
                  />
              </div>
              <v-layout
                v-else
                column
                style="
                  height: 100%;
                "
              >
                <v-flex xs12>
                  <h2 class="text-center mb-4 mt-2">Detalhes do plano {{ planoSelecionado.nome }}</h2>
                  <ul class="text-start">
                    <li
                      v-for="(beneficio, index) in planoSelecionado.beneficios"
                      :key="index"
                      class="ma-2"
                    >
                      {{ beneficio }}
                    </li>
                  </ul>
                </v-flex>
                <v-btn
                  large
                  @click="confirmarSelecao(planoSelecionado)"
                  v-if="!plano"
                >
                  Confirmar
                </v-btn>
              </v-layout>
            </v-flex>
            <v-flex
              xs12
              sm12
              md6
              style="
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                overflow: scroll;
                height: 52em;
              "
              v-if="!plano"
            >
              <v-flex xs12 style="margin-top: 35em;">
                <h3 style="width: 100%;">Selecionar um plano</h3>
              </v-flex>
              <v-flex
                xs12
                v-for="(pl, index) in planos"
                :key="index"
                class="ma-2"
                style="width: 100%;"
              >
                <v-hover
                  v-slot="{ hover }"
                >
                  <v-card
                    dark
                    :elevation="hover ? 10 : 4"
                    class="pa-4 ma-4"
                    @click="planoSelecionado = pl"
                  >
                    <h1 class="mb-3">{{ pl.valor | currency({fractionCount: 2}) }}</h1>
                    <h4>{{ pl.nome }}</h4>
                    <a>Clique no card para ver os detalhes</a>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-flex>
            <v-flex
              xs12
              sm12
              md6
              v-else
            >
              <v-flex
                xs12
                style="position: relative;"
                class="ma-0 pa-0"
              >
                <v-btn
                  fab
                  small
                  style="
                    position: absolute;
                    left: 0em;
                  "
                  @click="confirmarSelecao(undefined)"
                >
                  <v-icon>arrow_back</v-icon>
                </v-btn>
                <h2 class="mt-4">Cadastra-se com plano {{ plano.nome }}</h2>
              </v-flex>
              <v-container class="ma-4">
                <v-text-field
                  class="mt-4 ml-4 mr-4"
                  label="Nome de Usuário"
                  outlined
                  solo
                ></v-text-field>
                <v-text-field
                  class="ml-4 mr-4"
                  label="E-mail"
                  outlined
                  solo
                ></v-text-field>
                <v-text-field
                  class="ml-4 mr-4"
                  label="Telefone"
                  outlined
                  solo
                ></v-text-field>
                <v-text-field
                  class="ml-4 mr-4"
                  label="Senha"
                  outlined
                  solo
                ></v-text-field>
                <v-text-field
                  class="ml-4 mr-4"
                  label="Repetir Senha"
                  solo
                ></v-text-field>
              </v-container>
              <p>
                Concordo com os <a>termos de uso</a> e a <a>política de privacidade</a> da bannercotação.
              </p>
              <v-btn
                  block
                >
                  Criar Conta
                </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'UserLogin',

    data: () => ({
      planoSelecionado: undefined
    }),
    computed: {
      planos () {
        return this.$store.getters.planos
      },
      plano () {
        return this.$store.getters.plano
      }
    },
    methods: {
      confirmarSelecao (plano) {
        this.$store.dispatch('selecionarPlano', plano)
      }
    }
  }
</script>
