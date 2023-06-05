import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";
import PurchaseView from "../views/Purchase.vue";
import CartView from "../views/Cart.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/purchase",
      component: PurchaseView,
    },
    {
      path: "/cart",
      component: CartView,
    },
  ],
});