<template>
  <b-container>
    <b-row class="mb-4 mt-5">
      <b-col cols="11">
        <b-form inline>
        <input type="text" :v-model="keyword" class="form-control" id="input-text" placeholder="검색어를 입력">
              <b-button variant="outline-primary" @click="sendkeyword">검색</b-button>
              <b-button v-if="currentUser" variant="outline-success" class = "ml-auto" @click="move">글 작성</b-button>

        </b-form>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
import {mapActions } from 'vuex';

const storage = window.sessionStorage;

export default {
  name: 'SearchBar',
  data() {
    return {
      keyword : '',
    };
  },
  computed:{
    
    currentUser() {
      if (!storage.getItem('loginUser')){
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions(['getqnaList']),
    sendkeyword() {
      this.getqnaList(this.keyword);
          
    },
    move() {
        this.$router.push({
            path: "/qna/regist",
        })
    },

  },
};
</script>

<style></style>
