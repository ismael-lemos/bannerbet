<template>
    <v-container>
        <v-card>
            <v-card-text>
                <div class="d-flex align-center justify-center">
                    <v-img
                    alt="Logo da BannerBet"
                    class="shrink ma-2"
                    contain
                    :src="require('@/assets/bannerbet.png')"
                    transition="scale-transition"
                    width="350"
                    />
                </div>
                <h2>Contato BannerBet</h2>
                <p>Utilize das formas de contato listadas abaixo para fazer reclamações ou dar sugestões.
                    Se você tiver problemas mais complexos, pode utilizar nosso canal oficial de suporte clicando
                </p>
                <h3><b>WhatsApp (Preferível):</b> (87) 99662-5009</h3>
                <h3><b>Instagram:</b> @bannercotacao</h3>
                <h3><b>Facebook:</b> bannercotacaooficial</h3>
                <h3><b>E-mail:</b> bannercotacaoofc@gmail.com</h3>
            </v-card-text>
        </v-card>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'ContatoBannerBet',
      data: () => ({
      }),
    }
  </script>
  