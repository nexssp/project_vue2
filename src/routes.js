import VueRouter from "vue-router";

let routes = [
  {
    path: "/",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/register",
    component: () => import("./components/Register.vue"),
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: "is-active",
});
