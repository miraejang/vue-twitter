<template>
  <div class="flex flex-1 h-screen">
    <!-- notifications section -->
    <div class="flex-1 flex-col border-r border-gray-100 overflow-y-auto">
      <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
      <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer" v-for="notification in notifications" :key="notification.id">
        <div class="flex justify-between">
          <router-link :to="`/profile/${notification.uid}`">
            <img :src="notification.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-70" alt="" />
          </router-link>
          <i class="fas fa-ellipsis-h flex w-10 h-10 p-2 rounded-full items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-primary"></i>
        </div>
        <div>
          <span class="font-bold">{{ notification.username }}</span>
          님의 최근 트윗
        </div>
        <router-link :to="`/tweet/${notification.id}`">
          <div class="text-gray-500">{{ notification.tweet_body }}</div>
        </router-link>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from 'vue'
import TrendSection from '../components/trends.vue'
import store from '../store'
import { TWEET_COLLECTION } from '../firebase'
import getTweetInfo from '../untils/getTweetInfo'

export default {
  components: { TrendSection },
  setup() {
    const currentUser = computed(() => store.state.user)
    const notifications = ref([])

    onBeforeMount(() => {
      currentUser.value.followings.forEach(async (following) => {
        const dateFrom = Date.now() - 60 * 60 * 24 * 7 * 1000 // before 7 days
        const snapshot = await TWEET_COLLECTION.where('created_at', '>', dateFrom).where('uid', '==', following).orderBy('created_at', 'desc').get()
        snapshot.docs.forEach(async (doc) => {
          let tweet = await getTweetInfo(doc.data(), currentUser.value)
          notifications.value.push(tweet)
        })
      })
    })

    return { currentUser, notifications }
  },
}
</script>

<style>
</style>