import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import apartStore from "@/store/modules/apartStore.js";
import articleStore from "@/store/modules/articleStore.js";

export default new Vuex.Store({
  modules: {
    namespaced: true,
    apartStore,
    articleStore,
  },
});
