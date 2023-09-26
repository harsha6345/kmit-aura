import { createWebHistory, createRouter } from "vue-router";

import home from "./pages/home.vue";
import about from "./pages/about.vue";
import login from "./pages/login.vue";
import register from "./pages/register.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: home,
    },
    {
        path: "/login",
        name: "Login",
        component: login,
    },
    {
        path: "/register",
        name: "Register",
        component: register,
    },
    {
        path: "/about",
        name: "About",
        component: about,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
