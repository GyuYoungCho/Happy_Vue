<template>
  <b-row class="mt-4 mb-4">
    <b-col class="sm-3">
      <b-form-group label="Radios using options" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ><b-form-radio value="first">Toggle this custom radio</b-form-radio>
        <b-form-radio value="second">Or toggle this other custom radio</b-form-radio></b-form-radio-group>
    </b-form-group>
      <b-form-input
        v-model.trim="dong"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col>
  </b-row>
  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      dongCode: '',
    };
  },
  methods: {
    ...mapActions(['getAptList']),
    sendKeyword() {
      // this.$emit('send-keyword', this.dongCode);
      if (this.dongCode) this.getAptList(this.dongCode);
      // this.$store.dispatch('getAptList', this.dongCode);
      this.dongCode = '';
    },
  },
};
</script>

<style></style>
