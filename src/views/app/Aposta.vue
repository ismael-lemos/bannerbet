<template>
    <v-layout justify-space-between wrap style="height: 100%; background-color: #182635;">
        <v-flex xs12 sm12 md8>
            <v-flex
                xs12
                style="display: flex; align-items: inherit; flex-direction: column;"
            >
                <v-layout
                    justify-center
                    wrap
                    :style="{ 'height': tela_height - 134 + 'px', 'overflow': 'scroll' }"
                    v-if="!recarregarJogos"
                >
                    <v-flex xs10 v-for="(jogo, indexc) in jogosSelecionados" :key="indexc">
                        <card-jogo-ods
                            :timeCasa="jogo.time_casa"
                            :timeFora="jogo.time_fora"
                            :ods="jogo.ods"
                            :jogo="jogo"
                            @adicionarJogo="adicionarJogo(jogo)"
                            @removerJogo="removerJogo(indexc)"
                            @jogoParaCima="jogoParaCima(indexc)"
                            @jogoParaBaixo="jogoParaBaixo(indexc)"
                            @editaOdVitoria="editaOdVitoria"
                            @editaOdEmpate="editaOdEmpate"
                            @editaOdDerrota="editaOdDerrota"
                        />
                    </v-flex>
                </v-layout>
                <v-layout
                    class="white--text"
                    wrap
                    justify-space-around
                    :color="jogosSelecionados.length === 4 ? '#101923' : 'black'"
                >
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
                    <v-flex xs4 align-self-center>
                        <v-btn class="mr-4" small>Opções</v-btn>
                        <v-btn color="info" small>Prosseguir</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-flex>
        <v-flex
            v-if="adicionar || !($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
            xs12
            sm12
            md4
            :style="{
                'background-color': '#182635',
                'overflow': 'scroll',
                'height': tela_height - 64 + 'px'
              }"
        >
            <v-flex
                xs12
            >
                <label class="ml-3 mr-3 mt-4 white--text">Buscar jogo:</label>
                <v-text-field
                    label="Nome do time ou campeonato"
                    solo
                    class="ml-3 mr-3"
                />
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="dataSelecionada"
                            label="Selecione uma data"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            solo
                            class="white--text ml-3 mr-3"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                        locale="pt-br"
                        @input="$refs.menu.save(date), menu = false"
                        :allowed-dates="(date) => {
                            return Date.parse(date) >= today
                        }"
                    />
                </v-menu>
            </v-flex>
            <v-flex v-for="(campeonato, index) in campeonatos" :key="index">
                <h2 class="white--text ml-2 pa-2" style="background-color: #4e03a3;">
                    {{ campeonato.pais || '' }}:
                    {{ campeonato.nome || '' }}
                </h2>
                <v-flex v-for="(jogo, indexb) in campeonato.jogos" :key="indexb">
                    <card-jogo
                        :timeCasa="jogo.time_casa"
                        :timeFora="jogo.time_fora"
                        :ods="jogo.ods"
                        :horario="jogo.horario"
                        @adicionarJogo="adicionarJogo(jogo, indexb)"
                        :jaInserido="jogoEstaLista(jogo.id)"
                    />
                </v-flex>
            </v-flex>
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
        adicionar: false,
        recarregarJogos: false,
        jogosSelecionados: [],
        campeonatos: [
            {
                pais: 'Canada',
                nome: 'Championship',
                jogos: [
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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
                        id: 4,
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
                        id: 5,
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
                        id: 6,
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
                        id: 7,
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
        ],
        date: null,
        today: Date.parse(new Date().toISOString().substr(0, 10)),
        menu: false,
        dataSelecionada: null
    }),
    methods: {
        adicionarJogo (jogo) {
            if (this.jogosSelecionados.length >= 6) this.ativarAlerta('error', 'Número máximo de jogos antingido!')
            const existe = this.jogoEstaLista(jogo.id)
            console.log(existe)
            if (!existe) {
                this.jogosSelecionados.push(jogo)
            }
        },
        removerJogo (index) {
            if (this.jogosSelecionados.length < 1) {
                this.ativarAlerta('error', 'Todos os jogos da lista foram removidos')
                return
            }
            this.jogosSelecionados.splice(index, 1)
        },
        jogoParaCima (index) {
            if (index === 0) return
            this.recarregarJogos = true
            const auxJogo = this.jogosSelecionados[index]
            this.jogosSelecionados[index] = this.jogosSelecionados[index - 1]
            this.jogosSelecionados[index - 1] = auxJogo
            this.recarregarJogos = false
        },
        jogoParaBaixo (index) {
            if (index === this.jogosSelecionados.length - 1) return
            this.recarregarJogos = true
            const auxJogo = this.jogosSelecionados[index]
            this.jogosSelecionados[index] = this.jogosSelecionados[index + 1]
            this.jogosSelecionados[index + 1] = auxJogo
            this.recarregarJogos = false
        },
        editaOdVitoria (novaOd, jogo) {
            console.log(novaOd)
            console.log(jogo)
            jogo.ods.vitoria = novaOd
        },
        editaOdEmpate (novaOd, jogo) {
            console.log(novaOd)
            jogo.ods.empate = novaOd
        },
        editaOdDerrota (novaOd, jogo) {
            console.log(novaOd)
            jogo.ods.derrota = novaOd
        },
        ativarAlerta (tipo, texto) {
            this.$store.dispatch('ativarAlerta', {
                ativo: true,
                texto: texto,
                tipo: tipo
            })
        },
        formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        jogoEstaLista (id) {
            return !!this.jogosSelecionados.find((j) => j.id === id)
        }
    },
    computed: {
        tela_height () {
            return this.$store.getters.tela_height
        }
    },
    watch: {
        date (val) {
            console.log(val)
            console.log(this.formatDate(val))
            if (val)  this.dataSelecionada = this.formatDate(val)
            else this.dataSelecionada = val
        }
    }
}
</script>