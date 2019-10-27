export const actions = {
    async getOffers({ commit }) {
        await this.$axios.get('/offer/offers/').then((res) => {
            commit('SET_OFFERS', res.data)
        })
    },

     async getOffer({ commit }, { id }) {
        await this.$axios.get('/offer/offers/' + id + '/').then((res) => {
            commit('SET_OFFER', res.data)
        })
    },

  async postulate({ commit }, { payload }) {
    await this.$axios.post('/application/offer-application/', payload).then((res) => {
      commit('SET_POSTULATIONS', res.data)
      this.$toast.success('Offre postulée')
    })
  },
}

export const mutations = {
  SET_OFFERS(state, offers) {
    state.offers = offers
  },

  SET_OFFER(state, offer) {
    state.offer = offer
  },

  SET_POSTULATIONS(state, postulations) {
    state.postulations.push(postulations)
  },
}

export const state = () => ({
  offers: [],

  offer: {},

  postulations: []
})

export const getters = {
  get_offers(state) {
    return state.offers
  },

   get_offer(state) {
     return state.offer
   },
}