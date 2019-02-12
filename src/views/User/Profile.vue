<template>
  <v-container>
    <h1>Profile</h1>
    <p>{{ user.id }}</p>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
