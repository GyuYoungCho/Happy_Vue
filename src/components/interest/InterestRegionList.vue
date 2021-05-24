<template>
  <b-container v-if="regionlist && regionlist.length != 0" class="bv-example-row mt-3">
    <b-card no-body>
      <b-card-body
        style="position:relative; height:500px; overflow-y:scroll;"
      >
        <region-item v-for="(region, index) in regionlist" :key="index" :region="region" />
      </b-card-body>
    </b-card>
    <b-input-group  class="mb-3 mt-5">
      <b-button variant="primary" @click="moveMap()">지도로 보기</b-button>
      <b-button variant="danger" @click="del">삭제</b-button>      
    </b-input-group>
  </b-container>
  
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>관심지역이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RegionItem from '@/components/interest/RegionItem.vue';

export default {
  name: 'InterestRegionList',
  components: {
    RegionItem,
  },
  computed: {
    ...mapGetters(['regionlist']),
  },
  methods : {
    ...mapActions(['getRegionList']),
  },
  mounted() {
    this.getRegionList()
  },
};
</script>

<style>

</style>