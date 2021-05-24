import Vue from "vue";
import Vuex from "vuex";
import rest from "@/js/httpCommon.js";

Vue.use(Vuex);

const adminStore = {
  state: {
    totalUsers: [],
  },
  getters: {
    totalUsers(state) {
      return state.totalUsers;
    },
  },
  mutations: {
    setTotalUsers(state, payload) {
      state.totalUsers = payload;
    },
  },
  actions: {
    setTotalUsers(store) {
      rest
        .axios({
          method: "get",
          url: "/user/admin",
        })
        .then((res) => {
          console.log(res.data);
          store.commit("setTotalUsers", res.data);
        })
        .catch((err) => {
          alert("전체 유저 로딩 실패");
          console.log(err);
        });
    },
  },
  modules: {},
};

export default adminStore;
