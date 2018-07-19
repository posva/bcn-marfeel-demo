import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./views/Home");
const Search = () => import("./views/Search");
const Contact = () => import("./views/Contact");

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
