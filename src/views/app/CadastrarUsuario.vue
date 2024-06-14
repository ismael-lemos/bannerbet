<template>
  <v-container style="height: 100%;">
    <v-row class="text-center" style="height: 100%;">
      <v-col cols="12"
        style="
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100%;
        "
      >
        <v-card
          color="#182635"
          style="width: 100%;"
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
                  v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
                  @click="confirmarSelecao(undefined), planoSelecionado = undefined"
                >
                  <v-icon>arrow_back</v-icon>
                </v-btn>
                <h2 class="mt-4">Cadastra-se com plano {{ plano.nome }}</h2>
              </v-flex>
              <v-container class="ma-4 text-start">
                <v-form lazy-validation v-model="valido" ref="formulario">
                  <label class="ml-4 mr-4">
                    Nome de Usuário:
                  </label>
                  <v-text-field
                    v-model="usuario_data.nome_usuario"
                    class="ml-4 mr-4"
                    label="Nome de Usuário"
                    solo
                    @input="usuario_data.nome_usuario = usuario_data.nome_usuario.toLowerCase().replaceAll(' ', '').trim()"
                    :rules="[
                      v => !!v || 'Esse campo é obrigatório',
                      v => {
                        const usernamePattern = /^[a-z0-9]+$/;
                        return usernamePattern.test(v) || 'Nome de usuário inválido'
                      }
                    ]"
                  ></v-text-field>
                  <label class="ml-4 mr-4">E-mail:</label>
                  <v-text-field
                    v-model="usuario_data.email"
                    class="ml-4 mr-4"
                    label="E-mail"
                    solo
                    @input="usuario_data.email = usuario_data.email.toLowerCase().replaceAll(' ', '').trim()"
                    :rules="[
                      v => !!v || 'Esse campo é obrigatório',
                      v => {
                        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        return pattern.test(v) || 'E-mail inválido.'
                      }
                    ]"
                  ></v-text-field>
                  <label class="ml-4 mr-4">Telefone:</label>
                  <v-text-field
                    v-model.lazy="usuario_data.numero_telefone"
                    class="ml-4 mr-4"
                    label="Telefone"
                    solo
                    v-mask="'(##) # ####-####'"
                    :rules="[v => !!v || 'Esse campo é obrigatório']"
                  ></v-text-field>
                  <label class="ml-4 mr-4">Senha:</label>
                  <v-text-field
                    v-model="usuario_data.senha"
                    class="ml-4 mr-4"
                    label="Senha"
                    solo
                    :type="mostrarSenha ? 'text' : 'password'"
                    :append-icon="mostrarSenha ? 'visibility' : 'visibility_off'"
                    required
                    :rules="[v => !!v || 'Insira sua senha!']"
                    @click:append="mostrarSenha = !mostrarSenha"
                  ></v-text-field>
                  <label class="ml-4 mr-4">Repetir Senha:</label>
                  <v-text-field
                    v-model="usuario_data.senha_repetida"
                    class="ml-4 mr-4"
                    label="Repetir Senha"
                    solo
                    :type="mostrarSenha2 ? 'text' : 'password'"
                    :append-icon="mostrarSenha2 ? 'visibility' : 'visibility_off'"
                    required
                    @click:append="mostrarSenha2 = !mostrarSenha2"
                    :rules="[
                      v => !!v || 'Insira novamente sua senha!',
                      v => v === usuario_data.senha || 'A senha digitada está diferente',
                    ]"
                  ></v-text-field>
                </v-form>
              </v-container>
              <p>
                Concordo com os <dialog-termos-uso/> e a <dialog-politica-privacidade/> da bannercotação.
              </p>
              <v-btn
                  block
                  v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                  @click="confirmarSelecao(undefined), planoSelecionado = undefined"
                  class="mb-3"
                >
                  <v-icon class="mr-1">arrow_back</v-icon>
                  Voltar
                </v-btn>
              <v-btn
                block
                @click="realizarCadastro"
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
import DialogTermosUso from '@/components/DialogTermosUso.vue'
import DialogPoliticaPrivacidade from '@/components/DialogPoliticaPrivacidade.vue'

  export default {
    name: 'UserLogin',
    components: { DialogTermosUso, DialogPoliticaPrivacidade },
    data: () => ({
      planoSelecionado: undefined,
      mostrarSenha: false,
      mostrarSenha2: false,
      valido: false,
      usuario_data: {
        id: 3981,
        nome_completo: undefined,
        nome_usuario: undefined,
        email: undefined,
        numero_telefone: undefined,
        cpf: undefined,
        data_cadastro: undefined,
        senha: undefined,
        repeticao_senha: undefined,
      }
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
      },
      realizarCadastro () {
        if (this.$refs.formulario.validate()) {
          this.$store.dispatch('iniciarSessao', this.usuario_data).then(() => {
            this.$router.push('/')
          })
        } else {
          this.$store.dispatch('ativarAlerta', {
            tipo: 'error',
            ativo: true,
            texto: 'O formulário de cadastro precisa ser completamente preenchido'
          })
        }
      }
    }
  }
</script>
