export const actions = {
    async getOffers({ commit }) {
        return await this.$axios.get('/offer/offers/').then((res) => {
            commit('SET_OFFERS', res.data)
        })
    },

     async getOffer({ commit }, { id }) {
        return await this.$axios.get('/offer/offers/' + id).then((res) => {
            commit('SET_OFFER', res.data)
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
}

export const state = () => ({
  offers: [],

  offer: {}
})

export const getters = {
  get_offers(state) {
    return state.offers
  },

   get_offer(state) {
     return state.offer
   },
}