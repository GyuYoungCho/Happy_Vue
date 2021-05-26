<template>
    <div class="m-4">
        <h4>공지사항</h4>
        <b-table @row-clicked="detail" striped hover :items="items" :fields="fields" class="mt-4">
        <template #cell(fdate)="data">
            {{ data.item.date| formatDate }}
        </template>
        
        </b-table>
    </div>
</template>
<style scoped>

</style>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {fields: ["num", "name", "title", { key: 'fdate', label: 'date' }],};
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