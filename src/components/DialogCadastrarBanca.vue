<template>
    <v-card>
        <v-card-title>
            Cadastre sua banda:
        </v-card-title>
        <v-card-text>
            <v-layout justify-center class="mb-4" v-if="!banca">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-hover
                            v-slot="{ hover }"
                            open-delay="200"
                            >
                            <v-card
                                width="15em"
                                height="15em"
                                :elevation="hover ? 10 : 2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-card-text
                                    style="
                                        height: 100%;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        flex-direction: column;
                                    "
                                >
                                    <v-icon size="100" :color="hover ? 'info' : ''">attach_file</v-icon>
                                    <h4
                                        class="mt-3"
                                        :class="`${hover ? 'info' : ''}--text`"
                                    >Sem imagem</h4>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </template>
                    <span>Clique para inserir uma imagem</span>
                </v-tooltip>
            </v-layout>
            <v-text-field
                v-if="!banca"
                label="Nome"
                outlined
                v-model="nova_banca.nome"
            ></v-text-field>
            <v-text-field
                label="URL do site"
                outlined
                placeholder="www.meusite.com.br"
                v-model="nova_banca.link_site"
            ></v-text-field>
            <v-text-field
                label="Intagram"
                outlined
                placeholder="@meuinstagram"
                v-model="nova_banca.instagram"
            ></v-text-field>
            <v-text-field
                 v-if="!banca"
                label="Escolher logo"
                type="file"
            ></v-text-field>
            <v-select
                outlined
                :items="[
                    { text: 'Vermelho', value: 'Vermelho' }, 
                    { text: 'Azul', value: 'Azul' },
                    { text: 'Amarelo', value: 'Amarelo' },
                    { text: 'Verde', value: 'Verde' },
                    { text: 'Rosa', value: 'Rosa' },
                    { text: 'Laranja', value: 'Laranja' },
                    { text: 'Roxa', value: 'Roxa' }
                ]"
                label="Cor"
                v-model="nova_banca.cor"
            ></v-select>
        </v-card-text>
        <v-card-actions class="pa-0 ma-0">
            <v-btn
                color="info"
                block
                large
            >
                {{ 
                    banca ? 'Atualizar' : 'Cadastrar'
                }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['banca'],
    data: () => ({
        nova_banca: {}
    }),
    beforeMount () {
        this.nova_banca = this.banca ? this.banca : {}
    },
    watch: {
        banca (val) {
            this.nova_banca = val ? val : {}
        }
    }
}
</script>

<style>

</style>