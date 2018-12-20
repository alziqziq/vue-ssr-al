<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      Header
    }
  }
</script>

<style src="./assets/index.scss"></style>
<style lang="scss">
  main {
    width: 100%;
    padding-top: 70px;
  }
</style>
