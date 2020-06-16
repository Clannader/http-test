<template>
  <v-app-bar
    app
    dark
    flat
    fixed
    height="50"
    color="primary"
  >
    <v-app-bar-nav-icon
      @click.stop="changeSidebar()"
    >
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn
      text
      title="SUPERVISOR"
    >
      <v-img
        left
        :src="require('@/assets/user/default.jpg')"
        class="user-img"
      ></v-img>
      {{userName}}
    </v-btn>

  </v-app-bar>
</template>

<script>

  export default {
    name: 'AppToolbar',
    data() {
      return {
        userName: 'SUPERVISOR'
      }
    },
    created() {
      // this.userName = sessionStorage.getItem('userName')
    },
    methods: {
      changeSidebar() {
        this.$store.dispatch('setMini', !this.$store.getters.mini)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
