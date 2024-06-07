<template>
  <v-card style="background-color: black; opacity: 1;">
    <v-card-title style="background-color: gray;" class="white--text">
        <h1>Escolher Banca</h1>
    </v-card-title>
    <v-card-text class="white--text">
        teste
        <h3 class="white--text"> 
            ATENÇÃO: Você não possui bancas registradas, portanto, uma lista de bancas públicas (para teste e afins) será exibida até que você registre uma.
        </h3>
        <h3 class="white--text">
            *Já foram registradas 0 bancas em um limite de 1. Você pode pedir para que o suporte cadastre sua logo se o limite for atingido ou se precisar melhorar a qualidade da imagem.
        </h3>
        <v-layout class="mt-4" wrap>
            <v-flex xs12 sm12 md2>
                <v-btn fab x-large color="info" @click="dialogCadastro = true">
                    <v-icon size="80">add</v-icon> 
                </v-btn>
            </v-flex>
            <v-flex xs12 sm12 md10>
                <v-layout wrap justify-start>
                    <v-flex xs12 sm6 md4 lg3 xl2 v-for="(banca, index) in bancas" :key="index">
                        <card-banca
                            :banca="banca"
                            @editarBanca="editarBanca"
                            @selecionarBanca="selecionarBanca(banca)"
                            :estaNaLista="bandaEstaLista(banca)"
                            @removerSelecao="removerSelecao(index)"
                        />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-dialog
            v-model="dialogCadastro"
            width="400"
            @click:outside="
                dialogCadastro = false,
                bancaSelecionada = undefined
            "
            @keydown.esc="
                dialogCadastro = false,
                bancaSelecionada = undefined
            "
        >
            <dialog-cadastrar-banca
                :banca="bancaSelecionada"
                @fechar="dialogCadastro = false, bancaSelecionada = undefined"
            ></dialog-cadastrar-banca>
        </v-dialog>
    </v-card-text>
    </v-card>
</template>

<script>
import DialogCadastrarBanca from '@/components/DialogCadastrarBanca.vue'
import CardBanca from '@/components/CardBanca.vue'

export default {
    components: {
        DialogCadastrarBanca,
        CardBanca
    },
    props: ['escolherMultiplas'],
    data: () => ({
        dialogCadastro: false,
        bancaSelecionada: undefined,
        bancasSelecionadas: [],
    }),
    computed: {
        bancas () {
            return this.$store.getters.bancas
        }
    },
    methods: {
        editarBanca (banca) {
            this.bancaSelecionada = banca
            this.dialogCadastro = true
        },
        bandaEstaLista (banca) {
            return !!this.bancasSelecionadas.find((b) => b.id === banca.id)
        },
        selecionarBanca (banca) {
            const existe = this.bandaEstaLista(banca)
            if (existe) {
                return
            }
            this.bancasSelecionadas.push(banca)
            this.$emit('selecionarBanca', this.bancasSelecionadas)
            if (!this.escolherMultiplas) {
                this.$emit('fechar')
            }
        },
        removerSelecao (index) {
            this.bancasSelecionadas.splice(index, 1)
        }
    }
}
</script>

<style>

</style>