export const actions = {
  async updatePassword({
    commit
  }, {
    payload
  }) {
    return await this.$axios.patch('/user/update-password/', payload).then((res) => {
      
        commit('SET_PASSWORD', res.data)
      
        this.$toast.success('PASSWORD MODIFIÉ')
    })
  },
  async requestPasswordReset({
    
  }, {
    payload
  }) {
    return await this.$axios.post('/password/reset-email/', payload).then((res) => {

      
      this.$toast.success('EMAIL ENVOYE')
    })
  },

  async resetPassword({payload}) {

    return await this.$axios.post('/password/reset-email/', payload).then((res) => {


      this.$toast.success('PASSWORD MODiFiÉ')
    })

  }
  
}

export const mutations = {
  SET_PASSWORD(state, user) {
    state.user = user
  }
}

export const state = () => ({
  user: []
})