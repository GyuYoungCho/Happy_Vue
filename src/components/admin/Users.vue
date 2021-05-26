<template>
  <div class="m-5">
    <h3>User Information</h3>
    <b-table hover :items="totalUsers" :fields="fields"
      :per-page="perPage"
      :current-page="currentPage">
    </b-table>
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table">
      </b-pagination>
    </div>
  </div>
</template>

<style scoped>
  .b-pagination {
    display: flex;
    justify-content: center;
  }
</style>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
          fields: ["id", "name", "email", "address", "gender", "phone"],
          perPage: 5,
          currentPage: 1,
        };
    },
    computed: {
      ...mapGetters(["totalUsers"]),
      rows() {
        return this.totalUsers.length
      }
    },
    created() {
        this.$store.dispatch("setTotalUsers");
    },
    methods: {
    },
    components: {
    },
}
</script>