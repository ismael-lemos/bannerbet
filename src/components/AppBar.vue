<template>
    <v-app-bar
      app
      color="#101923"
      dark
      height="80em"
    >
      <div class="d-flex align-center" @click="$router.push('/')">
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
                <v-layout xs12 v-for="(item, indexM) in m.itens" :key="`${indexM}menu-item`" class="mt-3" @click="$router.push(item.rota)">
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
        <v-img
          alt="Logo da BannerBet"
          class="shrink ml-4"
          contain
          :src="require('@/assets/bannerbet.png')"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <template v-if="!usuario">
        <v-btn class="mr-3" @click="$router.push('/cadastro')" color="white" style="color: #101923">
          Criar Conta
        </v-btn>
        <v-btn @click="$router.push('/login')" color="white" style="color: #101923">
          Logar
        </v-btn>
      </template>
      <template v-else>
        <h4 class="mr-4">Olá {{ usuario.nome_usuario }}</h4>
        <v-btn class="mr-3" color="white" style="color: #101923">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn @click="encerrarSessao()" color="white" style="color: #101923">
          Sair
        </v-btn>
      </template>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        titulo: 'Comece sua jornada',
        itens: [
          {
            nome: 'Início',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/presentation_icon.png',
            rota: '/'
          }
        ]
      },
      {
        titulo: 'Banners Prontos',
        itens: [
          {
            nome: 'Futebol pronto',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/ready_soccer_icon.png',
            rota: '/aposta'
          },
          {
            nome: 'Palpite pronto',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/ready_tips_icon.png',
            rota: '/aposta'
          },
          {
            nome: 'Basquete pronto',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/ready_basketball_icon.png',
            rota: '/aposta'
          }
        ]
      },
      {
        titulo: 'Banners comuns',
        itens: [
          {
            nome: 'Futebol',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_soccer.png',
            rota: '/aposta'
          },
          {
            nome: 'Basquete',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_nba.png',
            rota: '/aposta'
          },
          {
            nome: 'Luta',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_fight.png',
            rota: '/aposta'
          },
          {
            nome: 'Acumuladão',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_accumulated.png',
            rota: '/aposta'
          },
          {
            nome: 'Palpites',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_tips.png',
            rota: '/aposta'
          },
          {
            nome: 'Vôlei',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_volley.png',
            rota: '/aposta'
          },
          {
            nome: 'Conversão',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_cta.png',
            rota: '/aposta'
          },
          {
            nome: 'Roleta',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_roulette.png',
            rota: '/aposta'
          }
        ]
      },
      {
        titulo: 'Mais',
        itens: [
          {
            nome: 'Publicações',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_publications.png',
            rota: '/aposta'
          },
          {
            nome: 'Bilhete',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_ticket.png',
            rota: '/aposta'
          },
          {
            nome: 'Artes especiais',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_special.png',
            rota: '/aposta'
          },
          {
            nome: 'Notícias de esporte',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_sport_news.png',
            rota: '/aposta'
          },
          {
            nome: 'Odds Turbinadas',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_turbo_odd.png',
            rota: '/aposta'
          },
          {
            nome: 'Figurinhas',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_sticker.png',
            rota: '/aposta'
          },
          {
            nome: 'Cassino',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_roulette_casino.png',
            rota: '/aposta'
          }
        ]
      },
      {
        titulo: 'Vídeos',
        itens: [
          {
            nome: 'Futebol',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png',
            rota: '/aposta'
          }
        ]
      },
      {
        titulo: 'Não editáveis',
        itens: [
          {
            nome: 'Diários',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png',
            rota: '/aposta'
          },
          {
            nome: 'Especiais',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png',
            rota: '/aposta'
          },
          {
            nome: 'Personalizáveis',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_video.png',
            rota: '/aposta'
          }
        ]
      },
      {
        titulo: 'Plataforma',
        itens: [
          {
            nome: 'Minha conta',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_myaccount.png',
            rota: '/minhaconta'
          },
          {
            nome: 'Pagamento',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_cash.png',
            rota: '/pagamento'
          },
          {
            nome: 'Novidades',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_news.png',
            rota: '/novidades'
          },
          {
            nome: 'Suporte',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_support.png',
            rota: '/suporte'
          },
          {
            nome: 'Contato',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_contact.png',
            rota: '/contato'
          },
          {
            nome: 'Central de atualizações APPS',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/app_update_center_icon.png',
            rota: '/minhaconta'
          },
          {
            nome: 'Central de ajuda',
            icone: 'home',
            imagem: 'https://bannercotacao.s3.us-east-2.amazonaws.com/app/bc/icons/icon_help_center.png',
            rota: '/central-de-ajuda'
          }
        ]
      }
    ]
  }),
  methods: {
    encerrarSessao () {
      this.$store.dispatch('encerrarSessao').then(() => {
        if (this.$route.path !== '/') this.$router.push('/')
      })
    }
  },
  computed: {
    usuario () {
      return this.$store.getters.usuario
    }
  }
}
</script>

<style scoped>
  h5 {
    color: white;
  }
</style>
