import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import apartStore from "@/store/modules/apartStore.js";
import articleStore from "@/store/modules/articleStore.js";
// import mypageStore from "@/store/modules/mypageStore.js";
// import auth from "@/store/modules/auth.js";

export default new Vuex.Store({
  modules: {
    namespaced: true,
    apartStore,
    articleStore,
    // mypageStore,
    // auth,
  },
  plugins: [createPersistedState()],
});
