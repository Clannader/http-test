<template>
  <v-main class="layout-content-box">
    <v-container fluid class="main-content">
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: 'AppContent'
  }
</script>

<style lang="scss" scoped>

  .main-content {
    height: 100%;
    padding: 0;
    background-color: #ecf0f5;
  }
</style>
