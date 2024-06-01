import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/app/Home.vue'
import Login from './views/app/Login.vue'
import CadastrarUsuario from './views/app/CadastrarUsuario.vue'
import Aposta from './views/app/Aposta.vue'
// import { createRouter, createWebHistory } from 'vue-router'


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Home,
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
  }
];

export default new Router({
  mode: 'history',
  routes,
});