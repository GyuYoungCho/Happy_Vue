<template>
    <b-container style="min-height:600px">
        <div class="p-5">
            <b-form>
                <b-form-group label="제목:" label-for="title">
                    <b-form-input id="qtitle" type="text" placeholder="title" readonly v-model="qnai.title"></b-form-input>
                </b-form-group>

                <b-form-group label="내용" label-for="content">
                    <b-form-textarea id="qcontent" rows="5" placeholder="content" readonly v-model="qnai.content"></b-form-textarea>
                </b-form-group>

                <b-button @click="qnamodOpen" variant="outline-primary">수정</b-button>
                <b-button @click="del(qnai.num)" variant="outline-danger">삭제</b-button>
                <b-button @click="moveList" vari ant="outline-success">목록</b-button>

                <comment-items></comment-items>
            </b-form>

            <b-modal ref="qnamod" hide-footer title="글 수정하기">
                <b-form @submit="qnamodify">

                    <b-form-group label="제목:"
                                label-for="ftitle">
                    <b-form-input id="ftitle"
                                    type="text"
                                    v-model="qnaform.title"
                                    required
                                    placeholder="제목">
                    </b-form-input>
                    </b-form-group>

                    <b-form-group label="글"
                                label-for="fcontent">
                    <b-form-textarea id="fcontent"
                                    :v-model="qnaform.content"
                                    placeholder="글쓰기..."
                                    :rows="10"
                                    :max-rows="20">
                    </b-form-textarea>
                    </b-form-group>

                    <b-btn type="submit" variant="warning" class="float-right">글 수정</b-btn>
                </b-form>
            </b-modal>


    <b-modal ref="commod" hide-footer title="댓글 수정하기">
      <b-form @submit="commodify">

        <b-form-group label="글"
                      label-for="comment">
          <b-form-textarea id="comment"
                           v-model="comi.content"
                           placeholder="글쓰기..."
                           :rows="10"
                           :max-rows="20">
          </b-form-textarea>
        </b-form-group>

        <b-btn type="submit" variant="warning" class="float-right">글 수정</b-btn>
      </b-form>
    </b-modal>
    </div>
    </b-container>
</template>
<style scoped>

</style>
<script>
import rest from "@/js/httpCommon.js";
import { mapActions, mapGetters } from 'vuex';
import CommentItems from '../QnA/CommentItems.vue';
const storage = window.sessionStorage;

export default {
    data() {
        return {
            qnaform : {},
            comform : {},
        };
    },
    components : {
        CommentItems,
    },
    created() {
        this.user = JSON.parse(storage.getItem("loginUser"));
        this.update();
    },
    computed: {
        ...mapGetters(["qnai", "comi","comitems"]),
    },
    methods: {
        ...mapActions(["setqnaItem"]),
        moveList() {
            this.$router.push({
                path: "/qna/list",
            })
        },

        update(){
            let num = this.$route.params.num;
            this.setqnaItem(num);
        },

        qnamodify(num) {
            rest.axios({
                url: "/qna/" + num,
                method: "put",
                data: this.qnaform,
            }).then((res) => {
                console.log(res);
                alert("게시글 수정 성공");
                this.moveList();
            }).catch((err) => {
                alert("수정 실패");
                console.log(err);
            });
        },
        commodify(num) {
            rest.axios({
                url: "/comments/" + num ,
                method: "put",
                data: this.item,
            }).then((res) => {
                console.log(res);
                alert("댓글 수정 성공");
                this.moveList();
            }).catch((err) => {
                alert("수정 실패");
                console.log(err);
            });
        },
        qnadel(num) {
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
        },

        qnamodOpen() {
            this.qnaform.title = this.qnai.title;
            console.log(this.qnai.title)
            console.log(this.qnaform.title)
            this.qnaform.content = this.qnai.content;
            this.$refs.qnamod.show();
        },

        commodOpen() {
            this.comform.title = this.comi.title;
            this.comform.content = this.comi.content;
            this.$refs.commod.show();
        },

    },

}
</script>