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
</style>
