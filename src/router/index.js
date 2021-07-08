import { createRouter, createWebHistory } from 'vue-router';
import TwitterHome from "../pages/home.vue";
import TwitterMessages from "../pages/messages.vue";
import TwitterNotifications from "../pages/notifications.vue";
import TwitterProfile from "../pages/profile.vue";

const routes = [
  { path: '/', component: TwitterHome },
  { path: '/messages', component: TwitterMessages },
  { path: '/notifications', component: TwitterNotifications },
  { path: '/profile', component: TwitterProfile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
