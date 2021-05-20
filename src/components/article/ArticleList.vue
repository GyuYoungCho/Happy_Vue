<template>
    <div>
        <b-table @row-clicked="detail" striped hover :items="items">
        </b-table>
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
        ...mapGetters(["items"]),
    },
    created() {
        this.$store.dispatch("setItems");
    },
    methods: {
        detail(item) {
            this.$router.push({
                path: "/article/list/" + item.num,
            });
        },
    },
}
</script>