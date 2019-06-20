<template>
  <div class="home">
    <ul>
      <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    users() {
      return this.$store.getters.GET_USERS;
    }
  },
  mounted() {
    this.$store.dispatch("SET_USERS");
  }
};
</script>
