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
                        <v-card class="justify-center mb-4" dark style="width: 70%;">
                            <v-layout justify-center style="width: 100%;">
                                <img
                                    :src="banca.logo"
                                    alt="Imagem"
                                    style="width: 20em;"
                                >
                            </v-layout>
                            <v-card-text>
                                <h4><b>Nome:</b> {{ banca.nome }}</h4>
                                <h4><b>Link do site:</b> {{ banca.link_site }}</h4>
                                <h4><b>Intagram:</b> {{ banca.instagram }}</h4>
                                <h4><b>Cor:</b> {{ banca.cor }}</h4>
                            </v-card-text>
                            <v-card-actions class="justify-center">
                                <v-btn
                                    outlined
                                    class="mb-3"
                                    dark
                                    @click="bancaSelecionada = banca, dialogCadastro = true"
                                >
                                    Alterar Dados
                                </v-btn>
                            </v-card-actions>
                        </v-card>
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
export default {
    components: {
        DialogCadastrarBanca
    },
    data: () => ({
        bancas: [
            {
                nome: 'Teste',
                link_site: 'www.sportbetgol.club',
                instagram: '@sportbetgol.club',
                cor: 'Laranja',
                logo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/logo/c601c6a120f0e430621174764780601c6a120f0e7.png'
            }
        ],
        dialogCadastro: false,
        bancaSelecionada: undefined,
    })
}
</script>

<style>

</style>