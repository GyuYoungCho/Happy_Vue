<template>
  <div class="m-4">
        <h4>QnA</h4>
        <b-table @row-clicked="detail" striped hover :items="qnaitems" :fields="fields" class="mt-4">
        </b-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            fields: ["num", "name", "title", "date", "lookup", "commentcount"],
        };
    },
    computed: {
        ...mapGetters(["qnaitems"]),
        rows() {
            return this.qnaitems.length
        }
    },
    created() {
        this.$store.dispatch("setqnaItems");
    },
    methods: {
        detail(item) {
            this.$router.push({
                path: "/qna/detail/" + item.num,
            });
        },
    },
}
</script>

<style>

</style>