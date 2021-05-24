<template>
    <div>
        <bar-chart :chart-data="totalUsers"></bar-chart>
        <Users></Users>
    </div>
</template>
<style scoped>

</style>
<script>
import { Bar } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import Users from './Users';

export default {
    extends: Bar,
    mounted () {
        this.renderChart("totalUsers", "name");
    },
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
        Users,
    },
}
</script>