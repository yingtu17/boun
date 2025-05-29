import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/rewards",
    name: "Rewards",
    component: () => import("../views/Rewards.vue"),
  },
  {
    path: "/nft",
    name: "Nft",
    component: () => import("../views/Nft.vue"),
  },
  {
    path: "/swap",
    name: "Swap",
    component: () => import("../views/Swap.vue"),
  },
  {
    path: "/policy",
    name: "Policy",
    component: () => import("../views/Policy.vue"),
  },
  {
    path: "/referral",
    name: "Referral",
    component: () => import("../views/MyReferral.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
