<template>
  <b-container v-if="apts && apts.length != 0" class="bv-example-row mt-3">
    <b-card no-body>
      <b-card-body
        style="position:relative; height:1000px; overflow-y:scroll;"
      >
    <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt" />
      </b-card-body>
    </b-card>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>아파트 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AptListItem from '@/components/apart/AptListItem.vue';

export default {
  name: 'AptList',
  components: {
    AptListItem,
  },
  computed: {
    ...mapGetters(['apts']),
  },
};
</script>

<style></style>
