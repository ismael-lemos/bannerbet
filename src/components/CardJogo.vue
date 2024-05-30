<template>
    <v-card @click="$emit('adicionarJogo')">
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
        <v-card-actions style="background-color: lightgray;">
            <v-flex xs1>
                <h6>{{ ods.vitoria }}</h6>
            </v-flex>
            <v-flex xs1>
                <h6>{{ ods.empate }}</h6>
            </v-flex>
            <v-flex xs1>
                <h6>{{ ods.derrota }}</h6>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs2>
                <h6>Hora: {{ horario }}</h6>
            </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['timeCasa', 'timeFora', 'ods', 'horario']
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