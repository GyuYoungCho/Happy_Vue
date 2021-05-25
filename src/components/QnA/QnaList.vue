<template>
    <div class="m-5">
        <b-table id="my-table" @row-clicked="detail" 
            striped hover :items="items"
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
            perPage: 3,
            currentPage: 1,
        };
    },
    computed: {
        ...mapGetters(["items"]),
        rows() {
            return this.items.length
        }
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
