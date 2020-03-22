<template>
  <div id="app">
    <MainLayout>
      <router-view/>
    </MainLayout>
  </div>
</template>

<script>
  import MainLayout from './layouts/MainLayout.vue';

  export default {
    components: {
      MainLayout
    }
  }
</script>>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
