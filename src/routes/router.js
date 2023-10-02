import { createRouter, createWebHistory } from "vue-router";
import NotFound from '../components/NotFound.vue'
import Login from "../screens/auth/Login.vue"
import PasswordRecovery from "../screens/auth/PasswordRecovery.vue"
import register from "../screens/auth/SignUp.vue"


import store from "../store/store";

const router = createRouter({
  linkActiveClass: "link-active",
  linkExactActiveClass: "exact-link",
  history: createWebHistory(),
  routes: [
    { name: "index", path: "/", redirect: "/login" },
    { name: "login", path: "/login", component: Login },
    { name: "passwordRecovery", path: "/reset-password", component: PasswordRecovery },
    { name: "register", path: "/register", component: register },
    {
      name: "404",
      path: "/:notFound(.*)*",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth && store.state.token) {
    next("/dashboard");
  } else if (to.meta.requiresAuth && !store.state.token) {
    next(from);
  } else {
    next();
  }
});

export default router;
