<template>
<div id="app">
  <app-nav-bar/>
  <router-view/>
  <app-footer></app-footer>
</div>
</template>

<script>
import NavBar from './layout/NavBar.vue';
import Footer from './layout/Footer.vue';

export default {
  name: 'App',
  components: {
    AppNavBar: NavBar,
    AppFooter: Footer
  }
}
</script>

<style lang="scss">
@import './styles/own.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
