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
        <map-view></map-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AptSearchBar from '@/components/apart/AptSearchBar.vue';
import AptList from '@/components/apart/AptList.vue';
import MapView from '@/components/apart/MapView.vue';

export default {
  name: 'Apt',
  components: {
    AptSearchBar,
    AptList,
    MapView,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
