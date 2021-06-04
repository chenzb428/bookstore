<template>
  <div id="app">
    <MyHeader />
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/Header';

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">

</style>
