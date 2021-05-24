import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/views/Main.vue";
import AptView from "@/components/views/AptView.vue";
import ArticleList from "@/components/article/ArticleList.vue";
import ArticleRegist from "@/components/article/ArticleRegist.vue";
import ArticleDetail from "@/components/article/ArticleDetail.vue";
import ArticleModify from "@/components/article/ArticleModify.vue";

import UserRegist from "@/components/user/UserRegist.vue";
import UserPage from "@/components/user/UserPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      auth: false,
    },
  },
  {
    path: "/article/list",
    name: "ArticleList",
    component: ArticleList,
  },
  {
    path: "/article/regist",
    name: "ArticleRegist",
    component: ArticleRegist,
  },
  {
    path: "/article/list/:num",
    name: "ArticleDetail",
    component: ArticleDetail,
  },
  {
    path: "/article/modify/:num",
    name: "ArticleModify",
    component: ArticleModify,
  },
  {
    path: "/user/regist",
    name: "UserRegist",
    component: UserRegist,
  },
  {
    path: "/user/mypage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/apart/search",
    name: "AptView",
    component: AptView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
