<template>
  <div>
    <b-table hover :items="totalUsers"></b-table>
  </div>
</template>



<style scoped>
</style>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["totalUsers"]),
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