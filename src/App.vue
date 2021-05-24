<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html,
body {
  font-family: "Nanum Gothic","Karla", sans-serif;
}

#app {
  font-family: "Nanum Gothic","Karla", sans-serif;
}
</style>
