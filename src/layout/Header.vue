<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">Happy House</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/article/list">게시판</b-nav-item>
        <b-nav-item href="/article/regist">글 작성</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/user/regist">회원 가입</b-nav-item>
        <b-nav-item href="#" v-b-modal.loginModal>로그인</b-nav-item>
        <b-modal id="loginModal" title="Login" hide-footer>
          <form>
            <!-- Modal body -->
            <div class="modal-body">
              <label for="id">ID:</label>
              <input type="text" name="id" class="form-control" id="id" v-model="user.id" required placeholder="ID" />
              <label for="pass">Password:</label>
              <input type="password" name="pass" class="form-control" id="pass" v-model="user.pass" required placeholder="Enter Password" />
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <b-button @click="loginRequest" class="btn btn-primary" >Login</b-button>
              <b-button type="button" class="btn btn-danger" @click="$bvModal.hide('loginModal')">Close</b-button>
            </div>
          </form>

        </b-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import rest from "@/js/httpCommon.js";
// import { mapMutations } from 'vuex';
export default {
  data() {
    return {user: {}};
  },

  methods: {
    moveMain() {
      this.$router.push({
        path: "/",
      })
    },
    // ...mapActions(['REQUEST_LOGIN']),
    // ...mapMutations(['OPEN_MODAL', 'START_LOADING']),
    loginRequest() {
      // this.START_LOADING();
      // this.REQUEST_LOGIN(this.user);
      rest.axios({
        url: "/user/login",
        method: "post",
        data: this.user,
      }).then((res) => {
        if(res.data === "success") {
          alert("로그인 성공");
          this.moveMain();
        }
      }).catch((err) => {
        alert("로그인 실패");
        console.log(err);
      });
    }
  },
}


</script>
