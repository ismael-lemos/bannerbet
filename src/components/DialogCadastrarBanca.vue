<template>
    <v-card>
        <v-card-title>
            Cadastre sua banda:
        </v-card-title>
        <v-card-text>
            <v-text-field
                label="Nome"
                outlined
            ></v-text-field>
            <v-text-field
                label="URL do site"
                outlined
                placeholder="www.meusite.com.br"
            ></v-text-field>
            <v-text-field
                label="Intagram"
                outlined
                placeholder="@meuinstagram"
            ></v-text-field>
            <v-text-field
                label="Escolher logo"
                type="file"
            ></v-text-field>
            <v-select
                outlined
                :items="[
                    { text: 'Vermelho', value: 'red' }, 
                    { text: 'Azul', value: 'blue' },
                    { text: 'Amarelo', value: 'yellow' },
                    { text: 'Verde', value: 'green' },
                    { text: 'Rosa', value: 'pink' },
                    { text: 'Laranja', value: 'orange' },
                    { text: 'Roxa', value: 'purple' }
                ]"
                label="Cor"
            ></v-select>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
    })
}
</script>

<style>

</style>