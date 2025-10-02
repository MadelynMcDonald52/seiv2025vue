import { createRouter, createWebHashHistory } from "vue-router";


import Home from "./views/Home.vue";
import Add from "./views/course_add.vue";
import Edit from "./views/course_modify.vue";
import Import from "./views/import.vue";

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

    },  {
        path: "/",
      name: "edit_course",
      component: Edit,

    },  {
        path: "/",
      name: "Import",
      component: Import,

    },
  ],
});

export default router;