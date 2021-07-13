import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/home.vue'
import TwitterMessages from "/src/views/messages.vue"
import TwitterNotifications from "/src/views/notifications.vue"
import TwitterProfile from "/src/views/profile.vue"
import TwitterRegister from "/src/views/register.vue"
import TwitterLogin from "/src/views/login.vue"
import store from "/src/store";

const routes = [
  { path: '/', component: Home, title: '홈', icon: 'fas fa-home fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/notifications', component: TwitterNotifications, title: '알림', icon: 'far fa-bell fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/messages', component: TwitterMessages, title: '쪽지', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', component: TwitterMessages, title: '북마크', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', component: TwitterMessages, title: '리스트', icon: 'far fa-list-alt fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/profile', component: TwitterProfile, title: '프로필', icon: 'far fa-user fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', component: TwitterProfile, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/register', component: TwitterRegister, meta: { isMenu: false, layout: 'EmptyLayout'} },
  { path: '/login', component: TwitterLogin, meta: { isMenu: false, layout: 'EmptyLayout'} },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// navigation guard
router.beforeEach((to, from, next) => {
  const currentUser = store.state.user
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  if (requireAuth && !currentUser) next('/login')
  else next()
})

export default router
