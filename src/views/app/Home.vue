<template>
  <v-container
    fluid
    fill-height
    class="pa-0"
    style="overflow-y: auto; overflow-x: hidden"
  >
  <app-bar
    @ativarMenu="drawer = !drawer"
  ></app-bar>
  <v-main app style="height: 100%">
    <v-alert
      dark
      v-show="alerta.ativo"
      :type="alerta.tipo"
      style="
        width: 100%;
        position: absolute;
      "
      :value="true"
    >
      <h4>{{alerta.texto}}</h4>
    </v-alert>
    <v-navigation-drawer
      absolute
      fixed
      v-model="drawer"
      width="40vh"
      color="#101923"
    >
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <template v-for="(m, index) in menu">
        <h4 class="primary--text ml-4" :key="`${index}h4`">
          {{ m.titulo  }}
        </h4>
        <v-list-item
          v-for="(item, indexM) in m.itens" :key="`${index}list-item${indexM}`"
          link
          @click="$router.push(item.rota)"
          :disabled="item.rota === $route.path"
          class="mt-2 mb-2"
          :style="
            item.rota === $route.path ? {
              'background-color': '#070B0F',
              'opacity': 0.5
            } : {}
          "
        >
          <v-list-item-icon>
            <img v-if="item.imagem" :src="item.imagem" alt="imagem" style="width: 1.5em;">
            <v-icon v-else-if="item.icone" color="white">{{ item.icone }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">
            {{ item.nome }}
          </v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-main>
  </v-container>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
  export default {
    name: 'HelloWorld',
    components: { AppBar },
    data: () => ({
      drawer: false,
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
    computed: {
      alerta () {
        return this.$store.getters.alerta
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: white;
  }
</style>
