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
                    :style="{ 'height': tela_height - 145 + 'px', 'overflow': 'scroll' }"
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
                        <h4 class="text-center">Jogos</h4>
                        <h2 class="text-center">{{ jogosSelecionados.length }}</h2>
                    </v-flex>
                    <v-flex xs2 align-self-center>
                        <h4>
                            Banca{{ bancasSelecionadas.length === 0 ? 's' : '' }}
                        </h4>
                        <v-icon v-if="bancasSelecionadas.length === 0" size="30" class="white--text">hide_image</v-icon>
                        <v-layout>
                            <img
                                v-for="(banda, index) in bancasSelecionadas"
                                :src="banda.logo"
                                alt="logo da banca"
                                :key="index"
                                style="width: 2.5em;"
                            >
                        </v-layout>
                    </v-flex>
                    <v-flex xs4 align-self-center>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    small
                                    v-bind="attrs"
                                    v-on="on"
                                    class="mr-4"
                                >
                                    Opções
                                    <v-icon>arrow_drop_down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="escolherMultiplas = false, dialogEscolherBanca = true">
                                    <v-list-item-content>
                                        Escolher Banca
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content @click="escolherMultiplas = true, dialogEscolherBanca = true">
                                        Escolher Múltiplas Bancas
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-btn
                            color="info"
                            small
                        >
                            Prosseguir
                            <i class="material-icons">arrow_forward</i>
                        </v-btn>
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
                'height': tela_height - 80 + 'px'
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
        <v-dialog
            v-model="dialogEscolherBanca"
            fullscreen
            @keydown.esc="
                dialogEscolherBanca = false,
                escolherMultiplas = false
            "
        >
            <dialog-selecionar-banca
                @fechar="dialogEscolherBanca = false, escolherMultiplas = false"
                :escolherMultiplas="escolherMultiplas"
                @selecionarBanca="selecionarBanca"
            />
        </v-dialog>
    </v-layout>
</template>

<script>
import CardJogo from '@/components/CardJogo.vue'
import CardJogoOds from '@/components/CardJogoOds.vue'
import DialogSelecionarBanca from '@/components/DialogSelecionarBanca'

export default {
    name: 'UserAposta',
    components: {
        CardJogo,
        CardJogoOds,
        DialogSelecionarBanca
    },
    data: () => ({
        adicionar: false,
        escolherMultiplas: false,
        recarregarJogos: false,
        dialogEscolherBanca: false,
        jogosSelecionados: [],
        bancasSelecionadas: [],
        date: null,
        today: Date.parse(new Date().toISOString().substr(0, 10)),
        menu: false,
        dataSelecionada: null
    }),
    methods: {
        adicionarJogo (jogo) {
            if (this.jogosSelecionados.length >= 6) this.ativarAlerta('error', 'Número máximo de jogos antingido!')
            const existe = this.jogoEstaLista(jogo.id)
            if (!existe) {
                this.jogosSelecionados.push(Object.assign({}, jogo))
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
            jogo.ods.vitoria = novaOd
        },
        editaOdEmpate (novaOd, jogo) {
            jogo.ods.empate = novaOd
        },
        editaOdDerrota (novaOd, jogo) {
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
        },
        selecionarBanca (bancas) {
            this.bancasSelecionadas = bancas
        }
    },
    computed: {
        tela_height () {
            return this.$store.getters.tela_height
        },
        campeonatos () {
            return this.$store.getters.campeonatos
        }
    },
    beforeMount () {
        this.date = new Date().toISOString().substr(0, 10)
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