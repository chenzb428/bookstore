<template>
  <div id="app">
    <MyHeader />
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import MyHeader from './components/Header';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    MyHeader,
    NavBar
  },
  mounted() {
    this.setData();
  },
  methods: {
    ...mapActions('cart', ['setData'])
  }
}
</script>

<style lang="scss">

</style>
