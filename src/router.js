import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";
import Search from "./views/Search";
import Contact from "./views/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/contacts/:id",
      component: Contact,
      props: true
    }
  ]
});
