import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCn98kIQSaby2Zg2mEp4_Gd34M_QNmn3Zc",
    libraries: "places",
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
