<template>
  <b-container class="bv-example-row">
    <h3 id="h3" class="ml-5 mt-5">QnA</h3>
    <qna-search-bar></qna-search-bar>
    <b-row>
       <b-col cols="12" align="center">
        <qna-list></qna-list>
       </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QnaSearchBar from "@/components/QnA/QnaSearchBar.vue";
import QnaList from '../QnA/QnaList.vue';

export default {
  components : {
    QnaSearchBar,
    QnaList,
  }
}
</script>

<style>
#h3 {
  text-shadow: 1px 1px 1px rgb(27, 15, 139);
  color: rgb(75, 57, 109)
}
</style>