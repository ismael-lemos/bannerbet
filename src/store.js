import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alerta: {
      tipo: 'error',
      texto: 'Número máximo de jogos antingido!',
      ativo: false
    }
  },
  mutations: {
    setAlerta (state, payload) {
      state.alerta = payload
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
    }
  },
  getters: {
    alerta (state) {
      return state.alerta
    }
  }
})