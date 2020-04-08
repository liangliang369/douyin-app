<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
