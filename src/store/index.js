import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import apartStore from "@/store/modules/apartStore.js";
import articleStore from "@/store/modules/articleStore.js";
import adminStore from "@/store/modules/adminStore.js";

export default new Vuex.Store({
  modules: {
    namespaced: true,
    apartStore,
    articleStore,
    adminStore,
  },
  plugins: [createPersistedState()],
});
