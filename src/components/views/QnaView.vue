<template>
  <b-container class="bv-example-row">
    
    <h1 style="color:darkblue" class="ml-5 mt-5">QnA </h1>
    <b-row class="ml-5">
      <qna-search-bar></qna-search-bar>
    </b-row>
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

</style>