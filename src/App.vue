<template>
  <div class="flex h-screen container mx-auto">
    <!-- side menu -->
    <side-menu v-if="false" :currentUser="currentUser"></side-menu>

    <!-- content -->
    <router-view></router-view>

    <tweet-modal v-if="showTweetModal" @closeModal="showTweetModal = false"></tweet-modal>
  </div>
</template>

<script>
import { ref, computed } from "vue"
import store from "./store";
import TweetModal from "./components/tweetModal";
import SideMenu from './components/sideMenu.vue';

export default {
  components: { TweetModal, SideMenu },
  setup() {
    const showTweetModal = ref(false)
    const currentUser = computed(() => store.state.user)
    
    return { showTweetModal, currentUser }
  },
}
</script>

<style>
</style>
