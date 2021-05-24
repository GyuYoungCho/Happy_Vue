<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>아파트 검색</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3" align="left">
        <apt-list />
      </b-col>
      <b-col cols="9">
        <apt-search-bar />
        <maps></maps>
      </b-col>
    </b-row>
  </b-container>
</template>
<script src="@/js/vue-google-maps.js"></script>

<script>
import AptSearchBar from '@/components/apart/AptSearchBar.vue';
import AptList from '@/components/apart/AptList.vue';
import Maps from '@/components/apart/Maps.vue';

export default {
  name: 'Apt',
  components: {
    AptSearchBar,
    AptList,
    Maps,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
