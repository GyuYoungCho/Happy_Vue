<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return{
      len : 0,
    }
  },
  computed : {
    ...mapGetters(["items"]),
    rows() {
      return this.items.length
    }
  }
}
</script>

<style>

</style>