import axios from 'axios'

export default {
    SET_USERS({ commit, state }) {
        axios.get(state.apiUrl + 'users')
             .then(res => commit('SET_USERS', res.data))
             .catch(err => console.log(err))
    }
}