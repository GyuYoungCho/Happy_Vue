import Vue from "vue";
import Vuex from "vuex";
import rest from "@/js/httpCommon.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
  },
  getters: {},
  mutations: {
    LOGIN(state, { accessToken }) {
      state.accessToken = accessToken;
    },
    LOGOUT(state) {
      state.accessToken = null;
    },
  },
  actions: {
    LOGIN({ commit }, { id }) {
      return rest.axios.post("/user/login", { id }).then(({ data }) => commit("LOGIN", data));
    },
    LOGOUT({ commit }) {
      commit("LOGOUT");
    },
  },
});
