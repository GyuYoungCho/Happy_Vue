<template>
  <b-container>
    <b-row class="mb-4">
      <b-col cols="6">
        <input type="text" v-model="filter" class="form-control" id="input-text" placeholder="검색어를 입력">
      </b-col>
      <b-col cols="6">
        <b-form-group>
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      dong: '',
      aptName:'',
      selected:'',
      arealist : ["시","서울특별시"],
      selectedarea : '시',
      selectedGu : '구',
      selectedDong : '동',
    };
  },
  computed:{
    ...mapGetters(["silist","donglist"]),

  },
  methods: {
    ...mapActions(['getSiList','getDongList','getNameAptList','getDongAptList']),
    sendkeyword() {
      
      if (this.selected=="dong") 
        {
          this.getDongAptList(this.selectedDong);
          return;
        }
      if (this.selected=="aptName") 
        {
          this.getNameAptList(this.aptName);
          return;
        }
    },
    getGu(){
      this.getSiList(this.selectedarea);
      
    },
    getDong(){
      this.getDongList(this.selectedGu);
    }

  },
};
</script>

<style></style>
