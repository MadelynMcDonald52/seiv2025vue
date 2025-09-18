import { createRouter, createWebHashHistory } from "vue-router";


import Home from "./views/Home.vue";
import Add from "./views/course_add.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: "/",
      name: "Home",
      component: Home,

    },  {
        path: "/",
      name: "Add",
      component: Add,

    },
  ],
});

export default router;