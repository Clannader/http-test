<template>
  <v-app id="cmsApp">
    <app-navigation></app-navigation>
    <app-toolbar></app-toolbar>
    <app-content></app-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import AppFooter from './components/AppFooter'
  import AppContent from './components/AppContent'
  import AppNavigation from './components/AppNavigation'
  import AppToolbar from './components/AppToolbar'

  export default {
    name: 'HomePage',
    components: {
      AppFooter,
      AppContent,
      AppNavigation,
      AppToolbar
    }
  }
</script>
