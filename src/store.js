import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    usuario: {
      id: 3981,
      nome_completo: 'Ismael Lemos',
      nome_usuario: 'Ismael',
      email: 'ismael.lemos.1997@gmail',
      numero_telefone: '84988798975',
      cpf: '12373456709',
      data_cadastro: '2024-06-07'
    },
    plano: {
      nome: 'Gratuito',
      valor: 0,
      acesso_videos: false
    },
    alerta: {
      tipo: 'error',
      texto: 'Número máximo de jogos antingido!',
      ativo: false
    },
    bancas: [
      { // Para Teste apenas
        id: 1,
        nome: 'Teste',
        link_site: 'www.sportbetgol.club',
        instagram: '@sportbetgol.club',
        cor: 'Laranja',
        logo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/logo/c601c6a120f0e430621174764780601c6a120f0e7.png'
      }
    ],
  },
  mutations: {
    setUsuario (state, payload) {
      state.usuario = payload
    },
    setPlano (state, payload) {
      state.plano = payload
    },
    setAlerta (state, payload) {
      state.alerta = payload
    },
    setBancas (state, payload) {
      state.bancas = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    ativarAlerta ({ commit }, payload) {
      commit('setAlerta', payload)
      const interval = setInterval(() => {
        payload.ativo = false
        commit('setAlerta', payload)
        clearInterval(interval)
      }, 5000)
    },
    cadastrarBanca ({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        if (!reject) {
          reject(Error('Não foi possível encerrar a sessão'))
        }
        commit('setLoading', true)
        state.bancas.push(payload)
        commit('setLoading', false)
        resolve('OK')
      })
    },
    editarBanca ({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        commit('setLoading', true)
        const banca = state.bancas.find((b) => b.id == payload.id)
        const existe = !!banca
        if (existe) {
          this.dispatch('ativarAlerta',
            {
              tipo: 'error',
              texto: 'Banca não existe',
              ativo: true
            }
          )
          commit('setLoading', false)
          reject(Error('Banca não existe'))
        }
        banca.nome = payload.nome
        banca.instagram = payload.instagram
        banca.logo = payload.logo
        banca.link_site = payload.link_site
        commit('setLoading', false)
        resolve('OK')
      })
    },
    encerrarSessao ({ commit }) {
      return new Promise((resolve, reject) => {
        if (!reject) {
          reject(Error('Não foi possível encerrar a sessão'))
        }
        commit('setLoading', true)
        commit('setUsuario', undefined)
        commit('setLoading', false)
        resolve('OK')
      })
    }
  },
  getters: {
    usuario (state) {
      return state.usuario
    },
    plano (state) {
      return state.plano
    },
    alerta (state) {
      return state.alerta
    },
    bancas (state) {
      return state.bancas
    },
    loading (state) {
      return state.loading
    },
    tela_width () {
      return Number(window.innerWidth)
    },
    tela_height () {
      return Number(window.innerHeight)
    }
  }
})