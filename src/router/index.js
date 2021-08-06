import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/home.vue'
import TwitterMessages from "/src/views/messages.vue"
import TwitterNotifications from "/src/views/notifications.vue"
import TwitterProfile from "/src/views/profile.vue"
import TwitterRegister from "/src/views/register.vue"
import TwitterLogin from "/src/views/login.vue"
import TweetDetail from "/src/views/tweetDetail.vue"
import store from "/src/store";

const routes = [
  { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/', name: 'explore', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/notifications', name: 'notifications', component: TwitterNotifications, title: '알림', icon: 'far fa-bell fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/messages', name: 'messages', component: TwitterMessages, title: '쪽지', icon: 'far fa-envelope fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/', name: 'bookmarks', component: Home, title: '북마크', icon: 'far fa-bookmark fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/', name: 'lists', component: Home, title: '리스트', icon: 'far fa-list-alt fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/profile', name: 'profile', component: TwitterProfile, title: '프로필', icon: 'far fa-user fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/', name: 'more', component: Home, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw', meta: { isMenu: true, requireAuth: true } },
  { path: '/tweet/:id', name: 'tweet', component: TweetDetail, meta: { isMenu: false } },
  { path: '/register', name: 'register', component: TwitterRegister, meta: { isMenu: false } },
  { path: '/login', name: 'login', component: TwitterLogin, meta: { isMenu: false } },
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
