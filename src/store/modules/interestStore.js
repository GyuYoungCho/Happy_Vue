import Vue from "vue";
import Vuex from "vuex";
import rest from "@/js/httpCommon.js";
import parkingList from "@/assets/서울주차장.json";

Vue.use(Vuex);

const storage = window.sessionStorage;
const interestStore = {
  state: {
    parkings: [],
    region: Object,
    regionlist: [],
  },
  getters: {
    region(state) {
      return state.region;
    },
    regionlist(state) {
      return state.regionlist;
    },
    parkings(state) {
      return state.parkings;
    },
  },
  mutations: {
    GET_REGION_LIST(state, regionlist) {
      state.regionlist = regionlist;
    },
    GET_PARKING_LIST(state, parkings) {
      state.parkings = parkings;
    },
    SELECT_REGION(state, region) {
      state.region = region;
    },
  },
  actions: {
    getRegionList({ commit }) {
      if (!storage.getItem("loginUser")) return;
      let id = JSON.parse(storage.getItem("loginUser")).id;
      rest
        .axios({
          method: "get",
          url: "/interest/" + id,
        })
        .then((res) => {
          commit("GET_REGION_LIST", res.data);
        })
        .catch((error) => {
          console.dir(error);
        });
    },

    selectRegion({ commit }, region) {
      commit("SELECT_REGION", region);

      const res = parkingList;

      let datas = [];

      res["DATA"].forEach((item) => {
        let gu = item.addr.split(" ")[0];
        if (gu == region) {
          let getitem = {
            parking_name: item["parking_name"],
            operation_rule_nm: item["operation_rule_nm"],
            tel: item["tel"],
            addr: item["addr"],
            lat: new String(item["lat"]),
            lng: new String(item["lng"]),
          };
          datas.push(getitem);
        }
      });

      commit("GET_PARKING_LIST", datas);
    },
  },
  modules: {},
};

export default interestStore;
