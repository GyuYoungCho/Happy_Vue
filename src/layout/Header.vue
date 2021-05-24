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
      <b-navbar-nav v-if="!currentUser" class="ml-auto">
        <b-nav-item href="/user/regist">회원 가입</b-nav-item>
        <b-nav-item href="#" v-b-modal.loginModal>로그인</b-nav-item>
      </b-navbar-nav>      
        <!-- <b-nav-item @click="myPage">My page</b-nav-item> -->
      <b-navbar-nav v-if="currentUser" class="ml-auto">
        <b-nav-item @click="logout">로그아웃</b-nav-item>
      </b-navbar-nav>
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
            <b-button @click="login" class="btn btn-primary" >Login</b-button>
            <b-button type="button" class="btn btn-danger" @click="$bvModal.hide('loginModal')">Close</b-button>
          </div>
        </form>

      </b-modal>
    </b-collapse>
  </b-navbar>
</template>

<script>
import rest from "@/js/httpCommon.js";

const storage = window.sessionStorage;

export default {
  data() {
    return {
      user: {},
      };
  },
  computed: {
    currentUser() {
      if (!sessionStorage.getItem('loginUser')){
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    moveMain() {
      this.$router.push({
        path: "/",
      })
    },
    login() {
      rest.axios({
        url: "/user/login",
        method: "post",
        data: this.user,
      }).then((res) => {
        console.log(res.data.data);
        console.dir(res.headers["jwt-auth-token"]);
        storage.setItem("jwt-auth-token", res.headers["jwt-auth-token"]);
        storage.setItem("loginUser", res.data.data);
        alert("로그인 성공");
        // this.moveMain();
      }).catch((err) => {
        alert("로그인 실패");
        console.log(err);
      });
    },
    logout() {
      storage.removeItem("jwt-auth-token");
      storage.removeItem("loginUser");
      alert("로그아웃 성공");
    }
  },
}


</script>
