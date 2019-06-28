export default {
    SET_USERS (state, users) {
        state.users = users
    },
    ADD_USER (state, user) {
        state.users.push(user)
    }
}
