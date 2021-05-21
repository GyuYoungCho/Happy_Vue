import Vue from "vue";
import Vuex from "vuex";
// import rest from "@/js/httpCommon.js";

Vue.use(Vuex);

const apartStore = {
  state: {
    apts: [],
    apt: Object,
  },
  mutations: {
    GET_APT_LIST(state, apts) {
      state.apts = apts;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
    },
  },
  actions: {
    // getDongAptList({ commit }, dong) {
    //   // const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;

    //   // const SERVICE_URL =
    //   //   "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";

    //   // const params = {
    //   //   LAWD_CD: dongCode,
    //   //   DEAL_YMD: "202010",
    //   //   serviceKey: decodeURIComponent(SERVICE_KEY),
    //   // };
    //   rest.axios
    //     .get("house", {
    //       params,
    //     })
    //     .then((res) => {
    //       commit("GET_DONG_APT_LIST", res.data.item);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    // },
    selectApt({ commit }, apt) {
      commit("SELECT_APT", apt);
    },
  },
  modules: {},
};

export default apartStore;
