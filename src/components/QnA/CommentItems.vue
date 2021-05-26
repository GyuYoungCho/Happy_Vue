<template>
    <div class="m-5">
        <b-table striped hover :items="comitems">
        </b-table>
    </div>
</template>
<style scoped>

</style>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {};
    },
    
    computed: {
        ...mapGetters(["qnai", "comitems"]),
    },
    created() {
        this.setcomItems(this.$route.params.num);
    },
    methods : {
        ...mapActions(["setcomItems"]),
    }
}
</script>