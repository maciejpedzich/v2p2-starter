import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
