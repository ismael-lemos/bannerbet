<template>
    <v-hover
        v-slot="{ hover }"
        open-delay="200"
    >
        <v-card
            class="justify-center mb-4"
            dark
            :style="{
                'width': '70%',
                'border-style': hover || estaNaLista ? 'solid' : 'none',
                'border-color': 'red',
                'border-width': 'medium'
            }"
            :elevation="hover ? 10 : 4"
        >
            <v-layout justify-center style="width: 100%;" @click="estaNaLista ? $emit('removerSelecao') : $emit('selecionarBanca')">
                <img
                    :src="banca.logo"
                    alt="Imagem"
                    style="width: 20em;"
                >
            </v-layout>
            <v-card-text @click="estaNaLista ? $emit('removerSelecao') : $emit('selecionarBanca')">
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
                    @click="$emit('editarBanca', banca)"
                >
                    Alterar Dados
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: ['banca', 'estaNaLista']

}
</script>