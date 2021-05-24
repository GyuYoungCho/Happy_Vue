<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>관심 지역 주차 정보</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3" align="left">
        <interest-region-list />
      </b-col>
      <b-col cols="9">
        <maps></maps>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import InterestRegionList from '@/components/interest/InterestRegionList.vue';
import Maps from '@/components/apart/Maps.vue';
export default {
  components: {
    InterestRegionList,
    Maps
    
  },
}
</script>

<style>

</style>