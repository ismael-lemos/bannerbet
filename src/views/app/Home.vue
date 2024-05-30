<template>
  <v-container>
    <v-row class="text-center mb-4" color="black">
      <v-carousel height="25em" show-arrows-on-hover>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <v-card elevation="4" class="mt-4" color="#182635">
      <template v-for="(itemMenu, index) in card_menu">
        <v-card-title style="background-color: #101923;" :key="`${index}title`">
          <h2># {{ itemMenu.titulo }}</h2>
        </v-card-title>
        <v-card-text :key="`${index}card-text`">
          <template v-if="itemMenu.itens">
            <v-layout
              wrap
              :justify-space-between="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"
              :justify-center="$vuetify.breakpoint.xs"
            >
              <v-flex xs12 sm6 md4 lg2 xl2 v-for="(card, indexb) in itemMenu.itens" :key="`${indexb}flex`" class="mb-4">
                <card-menu
                  @push="$router.push(card.caminho)"
                  :imagem="card.imagem"
                  :titulo="card.titulo"
                />
              </v-flex>
            </v-layout>
          </template>
        </v-card-text>
      </template>
    </v-card>
    <v-row>
      <v-col cols="12" class="ma-0" color="#182635">
      </v-col>
    </v-row>
    <v-footer absolute color="black">
      © Copyright 2024 Bannercotação - Todos os direitos reservados
  
        <a>Termos de uso</a> | <a>Privacidade Parcerias</a> <a>Sobre</a>
    </v-footer>
  </v-container>
</template>

<script>
import CardMenu from '@/components/CardMenu.vue';
  export default {
    name: 'HelloWorld',
    components: { CardMenu },
    data: () => ({
      card_menu: [
        {
          titulo: 'Alguns dos nossos modelos',
          itens: undefined
        },
        {
          titulo: 'Os queridinhos de futebol',
          itens: [
            {
              titulo: 'Sa oc9 4 Jogos',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b643812ec770b91116332772197643812ec770bc.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Sa oc9 6 Jogos',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b643812ec770b91116332772197643812ec770bc.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Sa oc9 2 Jogos',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b643812ec770b91116332772197643812ec770bc.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Sa cm9 4 Jogos',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/d643812c3c619f3028737591179643812c3c61a1.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Sa cm9 6 Jogos',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/d643812c3c619f3028737591179643812c3c61a1.jpeg',
              caminho: '/aposta'
            }
          ]
        },
        {
          titulo: 'As últimas publicações',
          itens: [
            {
              titulo: 'Bola de ouro',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a664e307a1009c29892028873517664e307a100a0.png',
              caminho: '/aposta'
            },
            {
              titulo: 'Corpus Christi',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b665743069e7a991493493474665743069e7ac.png',
              caminho: '/aposta'
            },
            {
              titulo: 'Campeão',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/e664c04d49931e820156722986664c04d499323.png',
              caminho: '/aposta'
            },
            {
              titulo: 'BRASILEIRÃO',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/e6656259106bce737453027596656259106bd2.png',
              caminho: '/aposta'
            },
            {
              titulo: 'Campeão',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a664c04422d5f74051334494845664c04422d5fa.png',
              caminho: '/aposta'
            }
          ]
        },
        {
          titulo: 'Bilhetes preferidos da galera',
          itens: [
            {
              titulo: 'Bilhete Premiado - 2 Bilhetes CL 2',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/d6287a44791440143312672629096287a44791444.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Bilhete Premiado - 2 Bilhetes CL 2',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a6287a3efd3d43159311796299686287a3efd3d47.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Bilhete Premiado - 2 Bilhetes CL 2',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a6287a4ab4c19b92612698721106287a4ab4c19f.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: 'Modelo Exclusivo 208 Bilhete 2',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/c635404c334b071940595616456635404c334b0a.jpeg',
              caminho: '/aposta'
            },
            {
              titulo: '2BilhBreno',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a64675ef8a70f81187564943064675ef8a70fb.jpeg',
              caminho: '/aposta'
            }
          ]
        },
        {
          titulo: 'Os mais famosos de cassino',
          itens: [
            {
              titulo: '[BC] Ganesha Fortune',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b664b5de30eaab31315099820664b5de30eaaf.png',
              caminho: '/aposta'
            },
            {
              titulo: '[BC] Qual desse é o seu favorito ?',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/c664b5a1eb78fe845560197476664b5a1eb7903.png',
              caminho: '/aposta'
            },
            {
              titulo: '[BC] Bingo Goal',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a6633bf1fb45fd16012939835516633bf1fb4602.png',
              caminho: '/aposta'
            },
            {
              titulo: '[BC] Balloon',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/a6633b9189205e39882503528546633b91892062.png',
              caminho: '/aposta'
            },
            {
              titulo: '[BC] Tigrinho',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/d662921cf65d6b601473921369662921cf65d6f.png',
              caminho: '/aposta'
            }
          ]
        },
        {
          titulo: 'Top modelos especiais',
          itens: [
            {
              titulo: 'Dia de GREEN!',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b664bdd9345f00451480040811664bdd9345f04.png',
              caminho: '/aposta'
            },
            {
              titulo: 'Afiliados!',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b664bdd078b19e892152084867664bdd078b1a1.png',
              caminho: '/aposta'
            },
            {
              titulo: 'Afiliados!',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/e664bdcd0401f58581379060755664bdcd0401f9.png',
              caminho: '/aposta'
            },
            {
              titulo: '(Semanou)!',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/d664bdce3cc58c5911634056144664bdce3cc590.png',
              caminho: '/aposta'
            },
            {
              titulo: 'Saque e deposite via pix!',
              imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/covers/b662aec4a7cd410954011909662aec4a7cd44.png',
              caminho: '/aposta'
            }
          ]
        }
      ]
    }),
  }
</script>

<style scoped>
  h2 {
    color: white;
  }
</style>
