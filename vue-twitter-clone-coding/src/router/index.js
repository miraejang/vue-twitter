import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import TwitterMessages from "../views/messages.vue"
import TwitterNotifications from "../views/notifications.vue"
import TwitterProfile from "../views/profile.vue"
import TwitterRegister from "../views/register.vue"
import TwitterLogin from "../views/login.vue"

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  { path: '/', component: Home, title: '홈', icon: 'fas fa-home fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/notifications', component: TwitterNotifications, title: '알림', icon: 'far fa-bell fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/messages', component: TwitterMessages, title: '쪽지', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/', component: TwitterMessages, title: '북마크', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/', component: TwitterMessages, title: '리스트', icon: 'far fa-list-alt fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/profile', component: TwitterProfile, title: '프로필', icon: 'far fa-user fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/', component: TwitterProfile, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw', meta: { isMenu: true, layout: 'AuthedLayout' } },
  { path: '/register', component: TwitterRegister, meta: { isMenu: false, layout: 'UnauthLayout' } },
  { path: '/login', component: TwitterLogin, meta: { isMenu: false, layout: 'UnauthLayout' } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
