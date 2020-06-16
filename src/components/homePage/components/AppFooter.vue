<template>
  <v-footer
    color="white"
    fixed
    inset
    app
    class="main-footer"
  >
    <strong>Copyright &copy; 2019-{{ new Date().getFullYear() }} Oliver.wu</strong>
    版权所有
    <v-spacer></v-spacer>
    <strong>版本</strong>1.0.0
  </v-footer>
</template>

<script>
  export default {
    name: 'AppFooter',
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .main-footer {
    padding: 10px;
    font-size: 10px;
    strong {
      padding: 0 10px 0 10px;
    }
  }

  .white {
    border-top: 1px solid #d2d6de !important;
  }
</style>
