import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/Main.vue";
import ArticleList from "@/components/article/ArticleList.vue";
import ArticleRegist from "@/components/article/ArticleRegist.vue";
import ArticleDetail from "@/components/article/ArticleDetail.vue";
import ArticleModify from "@/components/article/ArticleModify.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;