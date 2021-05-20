<template>
    <div class="m-5">
        <b-form>
            <b-form-group label="이름:" label-for="name">
                <b-form-input id="name" type="text" placeholder="name" readonly v-model="item.name"></b-form-input>
            </b-form-group>

            <b-form-group label="제목:" label-for="title">
                <b-form-input id="title" type="text" placeholder="title" readonly v-model="item.title"></b-form-input>
            </b-form-group>

            <b-form-group label="내용" label-for="content">
                <b-form-textarea id="content" rows="5" placeholder="content" readonly v-model="item.content"></b-form-textarea>
            </b-form-group>

            <b-button @click="modify" variant="outline-primary">수정</b-button>
            <b-button @click="del(item.num)" variant="outline-danger">삭제</b-button>
            <b-button @click="moveList" variant="outline-success">목록</b-button>
        </b-form>
    </div>
</template>
<style scoped>

</style>
<script>
import rest from "@/js/httpCommon.js";
import { mapGetters } from 'vuex';
export default {
    data() {
        return {};
    },
    created() {
        let num = this.$route.params.num;
        this.$store.dispatch("setItem", num);
    },
    computed: {
        ...mapGetters(["item"]),
    },
    methods: {
        moveList() {
            this.$router.push({
                path: "/article/list",
            })
        },
        modify() {
            this.$router.push({
                path: "/article/modify/" + this.item.num,
            })
        },
        del(num) {
            rest.axios({
                url: "/article/" + num,
                method: "delete",
            }).then((res) => {
                if (res.data === "success") {
                    alert("글 삭제 성공");
                    this.moveList();
                }
            }).catch((err)=>{
                alert("글 삭제 실패")
                console.log(err);
            });
        }
    },

}
</script>