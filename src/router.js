import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/app/Home.vue'
import Inicial from './views/app/Inicial.vue'
import Login from './views/app/Login.vue'
import CadastrarUsuario from './views/app/CadastrarUsuario.vue'
import Aposta from './views/app/Aposta.vue'
import MinhaConta from './views/app/MinhaConta.vue'
import Contato from './views/app/Contato.vue'
import Pagamento from './views/app/Pagamento.vue'
// import { createRouter, createWebHistory } from 'vue-router'


Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'PaginaInicial',
        component: Inicial,
        props: { fullscreen: true }
      },
      {
        path: '/login',
        name: 'UserLogin',
        component: Login,
      },
      {
        path: '/cadastro',
        name: 'CadastrarUsuario',
        component: CadastrarUsuario,
      },
      {
        path: '/aposta',
        name: 'UserAposta',
        component: Aposta,
      },
      {
        path: '/minhaconta',
        name: 'MinhaConta',
        component: MinhaConta,
      },
      {
        path: '/contato',
        name: 'ContatoBannerBet',
        component: Contato,
      },
      {
        path: '/pagamento',
        name: 'UsuarioPagamento',
        component: Pagamento,
      }
    ]
  },
];

export default new Router({
  mode: 'history',
  routes,
});
