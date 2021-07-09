import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TwitterMessages from "../views/messages.vue"
import TwitterNotifications from "../views/notifications.vue"
import TwitterProfile from "../views/profile.vue"
import TwitterRegister from "../views/register.vue"
import TwitterLogin from "../views/login.vue"

const routes = [
  { path: '/', component: Home, title: '홈', icon: 'fas fa-home fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/notifications', component: TwitterNotifications, title: '알림', icon: 'far fa-bell fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/messages', component: TwitterMessages, title: '쪽지', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/', component: TwitterMessages, title: '북마크', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/', component: TwitterMessages, title: '리스트', icon: 'far fa-list-alt fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/profile', component: TwitterProfile, title: '프로필', icon: 'far fa-user fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/', component: TwitterProfile, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw', meta: { isMenu: true, layout: 'DefaultLayout' } },
  { path: '/register', component: TwitterRegister, meta: { isMenu: false, layout: 'EmptyLayout' } },
  { path: '/login', component: TwitterLogin, meta: { isMenu: false, layout: 'EmptyLayout' } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
