<template>
  <v-container
    class="text-center"
    fill-height
    style="height: calc(100vh - 58px);"
  >
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">哎呀, 404</h1>

        <p>您要查找的页面不存在</p>

        <v-btn
          @click="gotoHome"
          color="primary"
          outlined
        >
          带你离开这里!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'NotFound',
    methods: {
      gotoHome() {
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>

<style scoped>

</style>
