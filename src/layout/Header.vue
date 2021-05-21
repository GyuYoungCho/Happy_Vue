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
          <!-- Modal body -->
          <form method="post" action="/user/login">
            <div class="modal-body">
              <label for="loginId">ID:</label>
              <input type="text" name="id" class="form-control" id="loginId" required placeholder="ID" />
              <label for="loginpw">Password:</label>
              <input type="password" name="pass" class="form-control" id="loginpw" required placeholder="Enter Password" />
            </div>

          <!-- Modal footer -->
            <div class="modal-footer">
              <b-button type="submit" class="btn btn-primary" >Login</b-button>
              <b-button type="button" class="btn btn-danger" @click="$bvModal.hide('loginModal')">Close</b-button>
            </div>
          </form>

        </b-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
};
</script>
