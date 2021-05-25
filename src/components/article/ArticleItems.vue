<template>
    <div class="m-4">
        <h4>공지사항</h4>
        <b-table @row-clicked="detail" striped hover :items="items" :fields="fields" class="mt-4">
        </b-table>
    </div>
</template>
<style scoped>

</style>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {fields: ["num", "name", "title", "date"],};
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