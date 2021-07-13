<template>
  <div class="flex h-screen container mx-auto">
    <!-- side menu -->
    <div class="w-1/4 xl:ml-5 pt-5 pl-5 pr-5 pb-5 flex flex-col justify-between border-r border-gray-200">
      <div class="flex flex-col items-center xl:items-start">
        <!-- logo -->
        <i class="fab fa-twitter text-3xl text-primary ml-4 mb-3"></i>
        <!-- menu -->
        <div class="flex flex-col items-start space-y-1">
          <router-link :to="route.path" :class="`hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer ${router.currentRoute.value.name == route.name ? 'text-primary' : ''}`" v-for="route in routes" :key="route">
            <div v-if="route.meta.isMenu">
              <i class="text-2xl" :class="route.icon"></i>
              <span class="ml-3 text-lg hidden xl:inline-block">{{ route.title }}</span>
            </div>
          </router-link>
        </div>
        <div class="mt-3 w-full flex justify-center">
          <button class="bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark">
            <span class="hidden xl:block">Tweet</span>
            <i class="fas fa-plus xl:hidden"></i>
          </button>
        </div>
      </div>
      <!-- profile button -->
      <div class="mt-3 relative">
        <button class="px-2 py-1 w-full h-12 rounded-full xl:hover:bg-blue-50 flex items-center justify-center" @click="showProfileDropdown = true">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full xl:hover-opacity-100 hover:opacity-70" alt="">
          <div class="ml-2 hidden xl:block">
            <p class="text-sm font-bold">{{ currentUser.email }}</p>
            <p class="text-xs text-gray-500 text-left">@{{ currentUser.username }}</p>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden xl:block"></i>
        </button>
        <!-- profile dropdown menu -->
        <div class="absolute bottom-6/5 right-0 shadow rounded-lg w-60 bg-white transform" v-if="showProfileDropdown" @click="showProfileDropdown = false">
          <button class="hover:bg-gray-50 border-b border-default flex p-3 w-full items-center">
            <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full" alt="">
            <div class="ml-2">
              <div class="font-bold text-sm">{{ currentUser.email }}</div>
              <div class="text-left text-light text-sm">@{{ currentUser.username }}</div>
            </div>
            <i class="fas fa-checke text-primary ml-auto"></i>
          </button>
          <button class="p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">@{{ currentUser.username }} 계정에서 로그아웃</button>
        </div>
      </div>
    </div>

    <!-- content -->
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from "vue"
import router from "/src/router"
import { auth } from "/src/firebase";
import store from "/src/store";

export default {
  setup() {
    const routes = ref([])
    const showProfileDropdown = ref(false)
    const currentUser = computed(() => store.state.user)

    const onLogout = async () => {
      await auth.signOut()
      store.commit("SET_USER", null)
      await router.replace('/login')
    }

    onBeforeMount(() => {
      routes.value = router.options.routes
    })
    
    return { routes, showProfileDropdown, onLogout, currentUser, router }
  },
}
</script>

<style>
</style>