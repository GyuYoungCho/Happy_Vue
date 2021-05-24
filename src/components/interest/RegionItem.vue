<template>
    <b-row
    class="m-2"
    @click="chooseRegion"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-media>
    <b-media-body>
        <h4 style="color:#00BFFF" >{{this.region.gu}}</h4> 
    </b-media-body>
      </b-media>
      <hr>
  </b-row>
</template>
<style scoped>

</style>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegionItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    region: Object,
  },
  methods: {
    ...mapActions(['selectRegion']),
    chooseRegion() {
      this.selectRegion(this.region.gu);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style scoped>

.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>