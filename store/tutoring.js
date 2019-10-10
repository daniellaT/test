export const actions = {
    async getTutorings({ commit }) {
        return await this.$axios.get('/tutoring/tutorings/').then((res) => {
            commit('SET_TUTORINGS', res.data)
        })
    },

    async storeTutoring({ commit }, { payload }) {
        return await this.$axios.post('/tutoring/tutorings/', payload).then((res) => {
            commit('APPEND_TUTORINGS', res.data)
            this.$toast.success('nouvel accompagnement ajouté')

        })
    },

    async getTutoring({ commit }, { id }) {
        return await this.$axios.get('/tutoring/tutorings/' + id + '/').then((res) => {
            commit('SET_TUTORING', res.data)
        })
    },
}

export const mutations = {
    SET_TUTORINGS(state, tutorings) {
        state.tutorings = tutorings
    },

    APPEND_TUTORINGS(state, payload) {
        state.tutorings.push(payload)
    },

    SET_TUTORING(state, tutoring) {
        state.tutoring = tutoring
    }
}

export const state = () => ({
    tutorings: [],
    tutoring: {}
})

export const getters = {
    get_tutorings(state) {
        return state.tutorings
    },

    get_tutoring(state) {
        return state.tutoring
    }
}

