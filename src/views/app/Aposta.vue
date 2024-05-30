<template>
    <v-layout justify-space-between wrap>
        <v-flex xs12 sm12 md8 style="background-color: #182635">
            <v-flex xs12>
                <v-layout justify-center wrap>
                    <v-flex xs10 v-for="(jogo, indexc) in jogosSelecionados" :key="indexc">
                        <card-jogo-ods
                            :timeCasa="jogo.time_casa"
                            :timeFora="jogo.time_fora"
                            :ods="jogo.ods"
                            :horario="jogo.horario"
                            @adicionarJogo="adicionarJogo(jogo)"
                        />
                    </v-flex>
                </v-layout>
                <v-footer :color="jogosSelecionados.length === 4 ? '#101923' : 'black'" app>
                    <v-layout xs12 class="white--text" wrap justify-space-around>
                        <v-flex xs2 align-self-center>
                            <h4>Jogos</h4>
                            <h2>{{ jogosSelecionados.length }}</h2>
                        </v-flex>
                        <v-flex xs2 align-self-center>
                            <h4>
                                Banca
                            </h4>
                            <v-icon size="40" class="white--text">hide_image</v-icon>
                        </v-flex>
                        <v-flex xs2 align-self-center>
                            <v-btn class="mr-4">Opções</v-btn>
                            <v-btn color="info">Prosseguir</v-btn>
                        </v-flex>
                    </v-layout>
                </v-footer>
            </v-flex>
        </v-flex>
        <v-flex xs12 sm12 md4 style="background-color: #4e03a3;">
            <v-navigation-drawer permanent width="100%" style="background-color: #4e03a3;">
                <v-flex v-for="(campeonato, index) in campeonatos" :key="index">
                    <h2 class="white--text ml-2">
                        {{ campeonato.pais || '' }}:
                        {{ campeonato.nome || '' }}
                    </h2>
                    <v-flex v-for="(jogo, indexb) in campeonato.jogos" :key="indexb">
                        <v-spacer></v-spacer>
                        <card-jogo
                            :timeCasa="jogo.time_casa"
                            :timeFora="jogo.time_fora"
                            :ods="jogo.ods"
                            :horario="jogo.horario"
                            @adicionarJogo="adicionarJogo(jogo)"
                        />
                        <v-spacer></v-spacer>
                    </v-flex>
                </v-flex>
              </v-navigation-drawer>
        </v-flex>
    </v-layout>
</template>

<script>
import CardJogo from '@/components/CardJogo.vue'
import CardJogoOds from '@/components/CardJogoOds.vue'
export default {
    name: 'UserAposta',
    components: {
        CardJogo,
        CardJogoOds
    },
    data: () => ({
        jogosSelecionados: [],
        campeonatos: [
            {
                pais: 'Canada',
                nome: 'Championship',
                jogos: [
                    {
                        time_casa: {
                            nome: 'Pacific FC',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60ddc6bf1781074145924017660ddc6bf17814.png'
                        },
                        time_fora: {
                            nome: 'Atl. Ottowa',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/d60de8434a51043237156340317760de8434a510b.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    },
                    {
                        time_casa: {
                            nome: 'Pacific FC',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60ddc6bf1781074145924017660ddc6bf17814.png'
                        },
                        time_fora: {
                            nome: 'Atl. Ottowa',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/d60de8434a51043237156340317760de8434a510b.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    },
                    {
                        time_casa: {
                            nome: 'Pacific FC',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60ddc6bf1781074145924017660ddc6bf17814.png'
                        },
                        time_fora: {
                            nome: 'Atl. Ottowa',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/d60de8434a51043237156340317760de8434a510b.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    }
                ]
            },
            {
                pais: 'EUA',
                nome: 'MLS',
                jogos: [
                    {
                        time_casa: {
                            nome: 'Los Angeles Galaxy',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                        },
                        time_fora: {
                            nome: 'FC Dallas',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    },
                    {
                        time_casa: {
                            nome: 'Los Angeles Galaxy',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                        },
                        time_fora: {
                            nome: 'FC Dallas',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    },
                    {
                        time_casa: {
                            nome: 'Los Angeles Galaxy',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                        },
                        time_fora: {
                            nome: 'FC Dallas',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    },
                    {
                        time_casa: {
                            nome: 'Los Angeles Galaxy',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                        },
                        time_fora: {
                            nome: 'FC Dallas',
                            url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                        },
                        ods: {
                            vitoria: 1.54,
                            empate: 1.46,
                            derrota: 2.50
                        },
                        horario: '23:30'
                    }
                ]
            }
        ]
    }),
    methods: {
        adicionarJogo (jogo) {
            if (this.jogosSelecionados.length < 6) this.jogosSelecionados.push(jogo)
            else this.ativarAlerta('error', 'Número máximo de jogos antingido!')
        },
        ativarAlerta (tipo, texto) {
            this.$store.dispatch('ativarAlerta', {
                ativo: true,
                texto: texto,
                tipo: tipo
            })
        }
    }
}
</script>