import axios from 'axios'

export default {
    SET_USERS ({ commit, state }) {
        axios.get(state.apiUrl + 'users')
            .then(res => commit('SET_USERS', res.data))
            .catch(err => console.log(err))
    },
    ADD_USER ({ commit, state }, user) {
        axios.post(state.apiUrl + 'users', user, { headers: { 'Content-Type': 'application/json' } })
            .then(res => commit('ADD_USER', res.data))
            .catch(err => console.log(err))
    }
}
