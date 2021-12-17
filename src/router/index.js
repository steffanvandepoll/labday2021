import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Redemption from "../views/Redemption.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/redemption",
    name: "Redemption",
    component: Redemption,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/hell",
    name: "Hell",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "hell" */ "../views/HolyHell.vue"),
  },
  {
    path: "/thething",
    name: "TheThing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "thething" */ "../views/TheThing.vue")
  },
  {
    path: '/daredevil',
    name: 'Daredevil',
    component: () => import('../views/Daredevil.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
