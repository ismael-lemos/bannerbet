<template>
    <v-card :width="widthImagem" @click="$emit('push')" loader-height="4">
        <img :src="imagem" alt="Imagem" :style="{ width: widthImagem }">
        <v-card-text>
            {{ titulo }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['imagem', 'titulo'],
    computed: {
        widthImagem () {
            if (this.$vuetify.breakpoint.xs) return '24.5em'
            else if (this.$vuetify.breakpoint.sm) return '15.5em'
            else if (this.$vuetify.breakpoint.md) return '15.5em'
            else if (this.$vuetify.breakpoint.lg) return '13.5em'
            else  return '18.5em'
        }
    },
    watch: {
        widthImagem (val) {console.log(val)}
    }
}
</script>