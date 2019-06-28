<template>
  <div class="home">
    <form @submit.prevent="addUser">
      <input type="text" placeholder="Name" v-model="name"> <br>
      <input type="email" placeholder="Email" v-model="email"> <br>
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Add">
    </form>
    <ul>
      <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    users () {
      return this.$store.getters.GET_USERS
    }
  },
  mounted () {
    this.$store.dispatch('SET_USERS')
  },
  methods: {
    addUser () {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('ADD_USER', user)
    }
  }
}
</script>
