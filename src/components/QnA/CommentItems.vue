<template>
    <div class="m-5">
        <b-table @row-clicked="detail" striped hover :items="comitems">
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
        ...mapGetters(["comitems"]),
    },
    created() {
        this.$store.dispatch("setcomItems");
    },
}
</script>