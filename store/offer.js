export const actions = {
    async getOffers({ commit }) {
        await this.$axios.get('/offer/offers/').then((res) => {
            commit('SET_OFFERS', res.data)
        })
    }
}

export const mutations = {
  SET_OFFERS(state, offers) {
    state.offers = offers
  }
}

export const state = () => ({
  offers: []
})

export const getters = {
  get_offers(state) {
    return state.offers
  }
}