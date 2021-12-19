import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('../views/AboutPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
