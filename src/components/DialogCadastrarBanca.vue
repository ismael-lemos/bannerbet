<template>
    <v-card>
        <v-card-title>
            Cadastre sua banda:
        </v-card-title>
        <v-card-text>
            <v-layout justify-center class="mb-4" v-if="!banca" wrap>
                <v-tooltip bottom v-if="!imagem && !croppingLogo">
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
                                @click="$refs.logoInput.click()"
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
                <v-hover
                    v-else-if="imagem && mostrar"
                    v-slot="{ hover }"
                    open-delay="200"
                >
                    <v-img
                        :src="imagem"
                        alt="Logo da banca"
                        @click="$refs.logoInput.click()"
                        height="15em"
                        max-width="15em"
                    >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out info darken-2 v-card--reveal text-h5 white--text text-center"
                            style="height: 100%;"
                        >
                            Clique para adicionar um nova imagem
                        </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
                <v-flex xs12 v-show="croppingLogo">
                    <vue-croppie
                        ref="croppieRef"
                        :enableExif="true"
                        :enforceBoundary="true"
                        :enableResize="false"
                        :enableOrientation="false"
                        :mouseWheelZoom="true"
                        :showZoomer="false"
                        :boundary="{ width: 240, height: 240 }"
                        :viewport="{ width: 200, height: 200 }"
                    ></vue-croppie>
                </v-flex>
                <v-btn
                    @click="recortarImagem"
                    color="info"
                    block
                    class="mt-3 mb-4"
                    v-if="croppingLogo"
                >
                    Recortar imagem
                </v-btn>
                <input
                    type="file"
                    style="display:none"
                    accept="image/*"
                    ref="logoInput"
                    @input="carregarImagem"
                />
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
                @click="cadastrarBanca"
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
        nova_banca: {},
        imagem: undefined,
        croppingLogo: false,
        mostrar: false
    }),
    beforeMount () {
        this.nova_banca = this.banca ? this.banca : {}
    },
    watch: {
        banca (val) {
            this.nova_banca = val ? val : {}
        }
    },
    methods: {
        carregarImagem (event) {
            this.imagem = null
            this.mostrar = false
            if (event.target.files && event.target.files[0]) {
                const imagem = event.target.files[0]
                const reader = new FileReader()
                reader.onloadend = () => {
                this.croppingLogo = true
                this.$refs.croppieRef.bind({
                    url: reader.result
                })
                this.$nextTick(() => {
                    this.$refs.croppieRef.setZoom(0.1)
                })
                }
                reader.readAsDataURL(imagem)
            }
        },
        recortarImagem () {
            const options = {
                type: 'base64',
                format: 'png'
            }
            this.mostrar = true
            options.circle = false
            this.$refs.croppieRef.result(options, output => {
                this.imagem = output
                this.croppingLogo = false
            })
        },
        cadastrarBanca () {
            this.$store.dispatch( this.banca ? 'editarBanca' : 'cadastrarBanca',
                {
                    ...this.nova_banca,
                    logo: this.imagem
                }
            )
            this.$emit('fechar')
        }
    }
}
</script>

<style>

</style>