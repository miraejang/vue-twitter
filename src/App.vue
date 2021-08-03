<template>
  <div class="flex h-screen container mx-auto">
    <!-- side menu -->
    <side-menu v-if="currentUser" :currentUser="currentUser"></side-menu>

    <!-- content -->
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from "vue"
import store from "./store";
import SideMenu from './components/sideMenu.vue';

export default {
  components: { SideMenu },
  setup() {
    const currentUser = computed(() => store.state.user)
    
    return { currentUser }
  },
}
</script>

<style>
</style>
