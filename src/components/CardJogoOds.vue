<template>
    <v-flex
        xs12
        style="
            justify-content: center;
            align-items: center;
            display: flex;
        "
    >
        <v-hover
            v-slot="{ hover }"
            open-delay="200"
        >
            <v-card
                class="mt-4 mb-4"
                :elevation="hover ? 12 : 4"
                :style="{
                    'height': hover ? '98%' :'95%',
                    'width': hover ? '98%' : '95%'
                }"
            >
                <v-layout justify-end class="pa-1 ma-0">
                    <v-btn small color="info" class="mr-1" @click="$emit('jogoParaCima')">
                        <v-icon>arrow_upward</v-icon>
                    </v-btn>
                    <v-btn small color="info" class="mr-1" @click="$emit('jogoParaBaixo')">
                        <v-icon>arrow_downward</v-icon>
                    </v-btn>
                    <v-btn small color="error" @click="$emit('removerJogo')">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-layout>
                <v-card-text>
                    <v-layout wrap justify-space-around>
                        <v-flex xs4 class="d-flex justify-end mb-6 bg-surface-variant">
                            <img
                                :src="timeCasa.url_esculo"
                                alt="escudo"
                                style="width: 3em;"
                            >
                            <h4>{{ timeCasa.nome }}</h4>
                        </v-flex>
                        <v-flex xs1>
                            <v-sheet
                                color="grey darken-2"
                                height="3em"
                                width="3em"
                                style="justify-content: center; align-items: center; display: flex;"
                            >
                                <h3 class="white--text">VS</h3>
                            </v-sheet>
                        </v-flex>
                        <v-flex xs4 class="d-flex justify-start mb-6 bg-surface-variant">
                            <img
                                :src="timeFora.url_esculo"
                                alt="escudo"
                                style="width: 3em;"
                            >
                            <h4 class="ml-3">{{ timeFora.nome }}</h4>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-card-actions class="justify-space-around">
                    <v-flex xs3>
                        <v-text-field
                            v-model.lazy="ods_fields.vitoria"
                            filled
                            v-money="money"
                        />
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                            v-model.lazy="ods_fields.empate"
                            filled
                            v-money="money"
                        />
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                            v-model.lazy="ods_fields.derrota"
                            filled
                            v-money="money"
                        />
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-hover>
    </v-flex>
</template>

<script>
import { VMoney } from 'v-money'
export default {
    props: ['timeCasa', 'timeFora', 'ods', 'jogo'],
    directives: { money: VMoney },
    data: () => ({
        money: {
            decimal: '.',
            thousands: ',',
            prefix: '',
            precision: 2,
            masked: false
        },
        ods_fields: {}
    }),
    beforeMount () {
        this.ods_fields = {
            ...this.ods
        }
    },
    watch: {
        'ods_fields.vitoria' (val) {
            this.$emit('editaOdVitoria', Number(val), this.jogo)
        },
        'ods_fields.empate' (val) {
            this.$emit('editaOdEmpate', Number(val), this.jogo)
        },
        'ods_fields.derrota' (val) {
            this.$emit('editaOdDerrota', Number(val), this.jogo)
        }
    }
}
</script>

<style scoped>
  h6 {
    display: inline; /* Isso faz com que o <h6> tenha apenas o tamanho do texto */
    background-color: black; /* Define a cor de fundo como preto */
    color: white; /* Define a cor do texto como branco para melhor contraste */
    padding: 2px 4px; /* Adicione algum espaço interno para melhor aparência */
  }
</style>