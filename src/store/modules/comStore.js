import Vue from "vue";
import Vuex from "vuex";
import rest from "@/js/httpCommon.js";

Vue.use(Vuex);

const qnaStore = {
  state: {
    comitems: [],
    comi: {},
  },
  getters: {
    comitems(state) {
      return state.comitems;
    },
    comi(state) {
      return state.comi;
    },
  },
  mutations: {
    set_com_Items(state, payload) {
      state.comitems = payload;
    },
    set_com(state, payload) {
      state.comi = payload;
    },
  },
  actions: {
    setcomItems(store) {
      rest
        .axios({
          method: "get",
          url: "/qna",
        })
        .then((res) => {
          store.commit("set_com_Items", res.data);
        })
        .catch((err) => {
          alert("게시판 로딩 실패");
          console.log(err);
        });
    },

    setItem({ commit }, num) {
      rest
        .axios({
          method: "get",
          url: "/article/" + num,
        })
        .then((res) => {
          commit("setItem", res.data);
        })
        .catch((err) => {
          alert("상세화면 로딩 실패");
          console.log(err);
        });
    },
  },
  modules: {},
};

export default qnaStore;
