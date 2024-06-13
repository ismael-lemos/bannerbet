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
    plano:  undefined, //{
      // nome: 'Gratuito',
      // valor: 0,
      // acesso_videos: false
    //},
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
    campeonatos: [
      {
        pais: 'Canada',
        nome: 'Championship',
        jogos: [
            {
                id: 1,
                time_casa: {
                    nome: 'Pacific FC',
                    url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60ddc6bf1781074145924017660ddc6bf17814.png'
                },
                time_fora: {
                    nome: 'Atl. Ottowa',
                    url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/d60de8434a51043237156340317760de8434a510b.png'
                },
                ods: {
                    vitoria: 1.54,
                    empate: 1.46,
                    derrota: 2.50
                },
                horario: '23:30'
            },
            {
                id: 2,
                time_casa: {
                    nome: 'Pacific FC',
                    url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60ddc6bf1781074145924017660ddc6bf17814.png'
                },
                time_fora: {
                    nome: 'Atl. Ottowa',
                    url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/d60de8434a51043237156340317760de8434a510b.png'
                },
                ods: {
                    vitoria: 1.54,
                    empate: 1.46,
                    derrota: 2.50
                },
                horario: '23:30'
            },
            {
                id: 3,
                time_casa: {
                    nome: 'Pacific FC',
                    url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60ddc6bf1781074145924017660ddc6bf17814.png'
                },
                time_fora: {
                    nome: 'Atl. Ottowa',
                    url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/d60de8434a51043237156340317760de8434a510b.png'
                },
                ods: {
                    vitoria: 1.54,
                    empate: 1.46,
                    derrota: 2.50
                },
                horario: '23:30'
            }
        ]
      },
      {
          pais: 'EUA',
          nome: 'MLS',
          jogos: [
              {
                  id: 4,
                  time_casa: {
                      nome: 'Los Angeles Galaxy',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                  },
                  time_fora: {
                      nome: 'FC Dallas',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                  },
                  ods: {
                      vitoria: 1.54,
                      empate: 1.46,
                      derrota: 2.50
                  },
                  horario: '23:30'
              },
              {
                  id: 5,
                  time_casa: {
                      nome: 'Los Angeles Galaxy',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                  },
                  time_fora: {
                      nome: 'FC Dallas',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                  },
                  ods: {
                      vitoria: 1.54,
                      empate: 1.46,
                      derrota: 2.50
                  },
                  horario: '23:30'
              },
              {
                  id: 6,
                  time_casa: {
                      nome: 'Los Angeles Galaxy',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                  },
                  time_fora: {
                      nome: 'FC Dallas',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                  },
                  ods: {
                      vitoria: 1.54,
                      empate: 1.46,
                      derrota: 2.50
                  },
                  horario: '23:30'
              },
              {
                  id: 7,
                  time_casa: {
                      nome: 'Los Angeles Galaxy',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/a60955c6a6dfa2100486565468660955c6a6dfa5.png'
                  },
                  time_fora: {
                      nome: 'FC Dallas',
                      url_esculo: 'https://bannercotacao.s3.us-east-2.amazonaws.com/client/banner/type/generic/team/shield/compressed/c60955c56f2ca1191950884819960955c56f2ca6.png'
                  },
                  ods: {
                      vitoria: 1.54,
                      empate: 1.46,
                      derrota: 2.50
                  },
                  horario: '23:30'
              }
          ]
      }
    ],
    planos: [
      {
        nome: 'Profissional + Vídeos',
        valor: 499.99,
        acesso_videos: true,
        beneficios: [
          'Acesso ao plano profissional + Acesso à bannervídeo'
        ]
      },
      {
        nome: 'Profissional',
        valor: 249.99,
        acesso_videos: false,
        beneficios: [
          'Gerar quantos banners quiser',
          'Imanges em alta qualidade',
          'Publicações para feed e stories',
          'Banners com e sem cotação',
          'Variedade em modelos',
          'Modelos para os principais campeonatos',
          'Banners com e sem jogador',
          'Artes especiais',
          'Banners de luta',
          'Banners de acumuladão',
          'Banners de basquete',
          'Banners de tips',
          'Banners com rodapé',
          'Gerador de bilhete premiado',
          'Gerador de odds turbinadas',
          'Banners para cassino',
          'Banners prontos (Já vem com sua banca, é só baixar!)',
          'Banners roleta (Imagens para colocar no seu site)',
        ]
      },
      {
        nome: 'Vídeos',
        valor: 249.99,
        acesso_videos: true,
        beneficios: [
          'Acesso aos banners gratuitos e ao gerador de vídeo'
        ]
      },
      {
        nome: 'Experiente',
        valor: 149.99,
        acesso_videos: false,
        beneficios: [
          'Gerar quantos banners quiser',
          'Imanges em alta qualidade',
          'Publicações para feed e stories',
          'Banners com e sem cotação',
          'Poucos modelos',
          'Modelos para os principais campeonatos',
          'Banners com e sem jogador',
        ]
      },
      {
        nome: 'Iniciante',
        valor: 99.99,
        acesso_videos: false,
        beneficios: [
          'Gerar quantos banners quiser',
          'Imanges em alta qualidade',
          'Publicações para feed e stories',
          'Banners com e sem cotação',
          'Poucos modelos'
        ]
      },
      {
        nome: 'Tips',
        valor: 49.99,
        acesso_videos: false,
        beneficios: [
          'Acesso somente ao gerador de Tips'
        ]
      },
      {
        nome: 'Gratuito',
        valor: 0,
        acesso_videos: false,
        beneficios: [
          'Banners para futebol',
          'Gerar quantos banners quiser',
         ' Sem variedade de modelos'
        ]
      }
    ]
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
    setCampeonatos (state, payload) {
      state.campeonatos = payload
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
    },
    iniciarSessao ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        if (!reject) {
          reject(Error('Não foi possível encerrar a sessão'))
        }
        commit('setLoading', true)
        commit('setUsuario', payload)
        commit('setLoading', false)
        resolve('OK')
      })
    },
    selecionarPlano ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        if (!reject) {
          reject(Error('Não foi possível encerrar a sessão'))
        }
        commit('setLoading', true)
        commit('setPlano', payload)
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
    planos (state) {
      return state.planos
    },
    alerta (state) {
      return state.alerta
    },
    bancas (state) {
      return state.bancas
    },
    campeonatos (state) {
      return state.campeonatos
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