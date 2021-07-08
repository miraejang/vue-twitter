import { createRouter, createWebHistory } from 'vue-router';
import TwitterHome from "../pages/home.vue";
import TwitterMessages from "../pages/messages.vue";
import TwitterNotifications from "../pages/notifications.vue";
import TwitterProfile from "../pages/profile.vue";

const routes = [
  { path: '/', component: TwitterHome, title: '홈', icon: 'fas fa-home fa-fw' },
  { path: '/', component: TwitterHome, title: '탐색하기', icon: 'fas fa-hashtag fa-fw' },
  { path: '/notifications', component: TwitterNotifications, title: '알림', icon: 'far fa-bell fa-fw' },
  { path: '/messages', component: TwitterMessages, title: '쪽지', icon: 'far fa-envelope fa-fw' },
  { path: '/', component: TwitterMessages, title: '북마크', icon: 'far fa-envelope fa-fw' },
  { path: '/', component: TwitterMessages, title: '리스트', icon: 'far fa-list-alt fa-fw' },
  { path: '/profile', component: TwitterProfile, title: '프로필', icon: 'far fa-user fa-fw' },
  { path: '/', component: TwitterProfile, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
