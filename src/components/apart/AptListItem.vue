<template>
  <b-row
    class="m-2"
    @click="chooseApt"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-media>
    <b-media-body>
            <h4 style="color:blue">{{this.apt.aptName}}</h4>
            <h6>거래금액 :{{this.apt.dealAmount}}</h6>
            <h6>면적: {{this.apt.area}}</h6>
            <p>
              <i></i>{{this.apt.dealDate}}</p>
    </b-media-body>
      </b-media>
      <hr>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AptListItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    apt: Object,
  },
  methods: {
    // chooseApt() {
    //   // this.$emit('select-apt', this.apt);
    //   this.$store.dispatch('selectApt', this.apt);
    // },
    ...mapActions(['selectApt']),
    chooseApt() {
      this.selectApt(this.apt);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style scoped>
.img-list {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
