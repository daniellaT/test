export const actions = {
    async getCoupons({ commit }) {
        return await this.$axios.get('/coupon/coupons/').then((res) => {
            commit('SET_COUPONS', res.data)
        })
    },

    async storeCoupon({ commit }, { code_number }) {
        return await this.$axios.post('/coupon/coupons/', code_number).then((res) => {
            commit('APPEND_COUPONS', res.data)
            this.$toast.success('COUPON VALIDÉ')
        })
    }
}

export const mutations = {
    SET_COUPONS(state, coupons) {
        state.coupons = coupons
    },

    APPEND_COUPONS(state, code_number) {
        state.coupons.push(code_number)
    }
}

export const state = () => ({
    coupons: []
})

export const getters = {
    get_coupons(state) {
        return state.coupons
    }
}

