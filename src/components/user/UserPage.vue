<template>
    <div class="container h-100">
    	<div class="row h-100">
			<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
				<div class="d-table-cell align-middle">
                    <b-form>
                        <h1 class="mt-3 text-center">회원 정보</h1>
                        <b-form-group id="id" label="아이디" label-for="id">
                            <b-form-input id="id" :value="user.id" type="text" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group id="name" label="이름" label-for="name">
                            <b-form-input id="name" :value="user.name" type="text" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group id="email" label="이메일" label-for="email">
                            <b-form-input id="email" :value="user.email" type="email" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group id="address" label="주소" label-for="address">
                            <b-form-input id="address" :value="user.address" type="text" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group id="phone" label="전화번호" label-for="phone">
                            <b-form-input id="phone" :value="user.phone" type="text" readonly></b-form-input>
                        </b-form-group>

                        <div class="text-center m-3">
                            <b-button @click="signup" variant="outline-primary">정보 수정</b-button>
                            <b-button @click="moveMain" variant="outline-danger">회원 탈퇴</b-button>
                        </div>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
const storage = window.sessionStorage;
export default {
    created() {
        this.user = JSON.parse(storage.getItem("loginUser"));
    },
    data() {
        return {
            user: {},
        };
    },
}
</script>