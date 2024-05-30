<template>
    <v-app-bar
      app
      color="#101923"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon size="40">menu</v-icon>
            </v-btn>
          </template>
          <v-card color="#101923" width="200em" height="25em">
            <v-layout wrap>
              <v-flex xs12 sm1 v-for="(m, index) in menu" :key="`${index}menu`">
                <h4 class="primary--text ml-4">{{ m.titulo  }}</h4>
                <v-layout xs12 v-for="(item, indexM) in m.itens" :key="`${indexM}menu-item`" class="mt-3">
                  <v-flex xs2>
                    <img v-if="item.imagem" :src="item.imagem" alt="imagem" style="width: 1.5em;">
                    <v-icon v-else-if="item.icone">
                      {{ item.icone }}
                    </v-icon>
                  </v-flex>
                  <v-flex xs10>
                    <h5>
                      {{ item.nome  }}
                    </h5>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-menu>
      </div>

      <v-spacer></v-spacer>
      <template v-if="!logado">
        <v-btn class="mr-3" @click="$router.push('/cadastro')" color="white" style="color: #101923">
          Criar Conta
        </v-btn>
        <v-btn @click="$router.push('/login'), logado = true" color="white" style="color: #101923">
          Logar
        </v-btn>
      </template>
      <template v-else>
        <v-btn class="mr-3" color="white" style="color: #101923">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn @click="$router.push('/'), logado = false" color="white" style="color: #101923">
          Sair
        </v-btn>
      </template>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    logado: false,
    menu: [
      {
        titulo: 'Comece sua jornada',
        itens: [
          {
            nome: 'Início',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/presentation_icon.png'
          }
        ]
      },
      {
        titulo: 'Banners Prontos',
        itens: [
          {
            nome: 'Futebol pronto',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/ready_soccer_icon.png'
          },
          {
            nome: 'Palpite pronto',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/ready_tips_icon.png'
          },
          {
            nome: 'Basquete pronto',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/ready_basketball_icon.png'
          }
        ]
      },
      {
        titulo: 'Banners comuns',
        itens: [
          {
            nome: 'Futebol',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_soccer.png'
          },
          {
            nome: 'Basquete',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_nba.png'
          },
          {
            nome: 'Luta',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_fight.png'
          },
          {
            nome: 'Acumuladão',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_accumulated.png'
          },
          {
            nome: 'Palpites',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_tips.png'
          },
          {
            nome: 'Vôlei',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_volley.png'
          },
          {
            nome: 'Conversão',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_cta.png'
          },
          {
            nome: 'Roleta',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_roulette.png'
          }
        ]
      },
      {
        titulo: 'Mais',
        itens: [
          {
            nome: 'Publicações',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_publications.png'
          },
          {
            nome: 'Bilhete',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_ticket.png'
          },
          {
            nome: 'Artes especiais',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_special.png'
          },
          {
            nome: 'Notícias de esporte',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_sport_news.png'
          },
          {
            nome: 'Odds Turbinadas',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_turbo_odd.png'
          },
          {
            nome: 'Figurinhas',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_sticker.png'
          },
          {
            nome: 'Cassino',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_roulette_casino.png'
          }
        ]
      },
      {
        titulo: 'Vídeos',
        itens: [
          {
            nome: 'Futebol',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png'
          }
        ]
      },
      {
        titulo: 'Não editáveis',
        itens: [
          {
            nome: 'Diários',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png'
          },
          {
            nome: 'Especiais',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png'
          },
          {
            nome: 'Personalizáveis',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png'
          }
        ]
      },
      {
        titulo: 'Plataforma',
        itens: [
          {
            nome: 'Minha conta',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_myaccount.png'
          },
          {
            nome: 'Pagamento',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_cash.png'
          },
          {
            nome: 'Novidades',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_news.png'
          },
          {
            nome: 'Suporte',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_support.png'
          },
          {
            nome: 'Contato',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_contact.png'
          },
          {
            nome: 'Central de atualizações APPS',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/app_update_center_icon.png'
          },
          {
            nome: 'Central de ajuda',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_help_center.png'
          }
        ]
      }
    ]
  })
}
</script>

<style scoped>
  h5 {
    color: white;
  }
</style>
