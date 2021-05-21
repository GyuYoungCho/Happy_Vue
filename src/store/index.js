import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import apartStore from "@/store/modules/apartStore.js";
import articleStore from "@/store/modules/articleStore.js";

const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장됩니다.
    apartStore: apartStore,
    articleStore: articleStore,
  },
});

export default store;
