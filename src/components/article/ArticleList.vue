<template>
    <div class="m-5">
        <b-button @click="moveList" v-if="currentAdmin" variant="outline-success">공지글 작성</b-button>
        <b-table id="my-table" @row-clicked="detail" 
            striped hover :items="items" :fields="fields"
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
const storage = window.sessionStorage;
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            fields: ["num", "name", "title", "date"],
            perPage: 3,
            currentPage: 1,
        };
    },
    computed: {
        ...mapGetters(["items"]),
        rows() {
            return this.items.length
        },
        currentAdmin() {
            if (this.user.id=="admin") {
                return true;
            } else {
                return false;
            }
        }
    },
    created() {
        this.user = JSON.parse(storage.getItem("loginUser"));
        this.$store.dispatch("setItems");
    },
    methods: {
        detail(item) {
            this.$router.push({
                path: "/article/list/" + item.num,
            });
        },
        moveList() {
            this.$router.push({
                path: "/article/regist",
            })
        },
    },
}
</script>
