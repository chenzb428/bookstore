<template>
  <div id="app">
    <MyHeader />
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/Header';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    MyHeader,
    NavBar
  }
}
</script>

<style lang="scss">

</style>
