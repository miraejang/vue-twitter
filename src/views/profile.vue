<template>
  <div class="flex flex-1 h-screen" v-if="profileUser">
    <!-- profile section -->
    <div class="felx flex-1 flex-col border-r border-default">
      <!-- title -->
      <div class="flex px-3 py-1 border-b border-default">
        <button class="mr-2" @click="router.go(-1)">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover: bg-blue-50"></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">{{ profileUser.email }}</div>
          <div class="text-xs text-light">{{ profileUser.num_tweets }} Tweets</div>
        </div>
      </div>
      <!-- profile image -->
      <div class="h-40 bg-gray-300 relative flex-none">
        <div class="absolute -bottom-14 left-2- w-28 h-28 rounded-full border-4 border-white bg-gray-100">
          <img :src="profileUser.profile_image_url" class="rounded-full opacity-90 hover:opacity-100 cursor-pointer" alt="" />
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <button class="border-2 text-primary border-primary px-3 py-1 hover:bg-blue-50 font-bold rounded-full">Edit profile</button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">{{ profileUser.email }}</div>
        <div class="text-light">{{ profileUser.username }}</div>
        <div>
          <span class="text-light">Joined </span>
          <span class="text-light">{{ moment(profileUser.created_at).format('LL') }}</span>
        </div>
        <div>
          <span class="font-bold mr-1">{{ profileUser.followings.length }}</span>
          <span class="text-light mr-3">Follwing</span>
          <span class="font-bold mr-1">{{ profileUser.followers.length }}</span>
          <span class="text-light">Follwers</span>
        </div>
      </div>
      <!-- tabs -->
      <div class="flex justify-between border-b border-default mt-3">
        <div
          @click="currentTab = 'tweets'"
          :class="currentTab === 'tweets' ? 'border-b border-primary text-primary' : 'text-light'"
          class="w-1/4 py-3 font-bold text-center hover:bg-blue-50 hover:text-primary cursor-pointer"
        >
          Tweets
        </div>
        <div
          @click="currentTab = 'replies'"
          :class="currentTab === 'replies' ? 'border-b border-primary text-primary' : 'text-light'"
          class="w-1/4 py-3 font-bold text-center hover:bg-blue-50 hover:text-primary cursor-pointer"
        >
          Tweets & repiles
        </div>
        <div
          @click="currentTab = 'media'"
          :class="currentTab === 'media' ? 'border-b border-primary text-primary' : 'text-light'"
          class="w-1/4 py-3 font-bold text-center hover:bg-blue-50 hover:text-primary cursor-pointer"
        >
          Media
        </div>
        <div
          @click="currentTab = 'likes'"
          :class="currentTab === 'likes' ? 'border-b border-primary text-primary' : 'text-light'"
          class="w-1/4 py-3 font-bold text-center hover:bg-blue-50 hover:text-primary cursor-pointer"
        >
          Likes
        </div>
      </div>
      <!-- tweets -->
      <div class="overflow-y-scroll">
        <tweet-form v-for="tweet in currentTab === 'tweets' ? tweets : currentTab === 'replies' ? replies : likes" :key="tweet.id" :currentUser="currentUser" :tweet="tweet"></tweet-form>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>

<script>
import { computed, ref, onBeforeMount } from '@vue/runtime-core'
import TrendSection from '../components/trends.vue'
import TweetForm from '../components/tweet.vue'
import store from '../store'
import { LIKES_COLLECTION, RETWEET_COLLECTION, TWEET_COLLECTION, USER_COLLECTION } from '../firebase'
import getTweetInfo from '../untils/getTweetInfo'
import moment from 'moment'
import { useRoute } from 'vue-router'
import router from '../router'

export default {
  components: { TrendSection, TweetForm },
  setup() {
    const currentUser = computed(() => store.state.user)
    const profileUser = ref(null)
    const tweets = ref([])
    const replies = ref([])
    const media = ref([])
    const likes = ref([])
    const currentTab = ref('tweets')
    const route = useRoute()

    onBeforeMount(() => {
      const profileUID = route.params.uid ?? currentUser.value.uid

      USER_COLLECTION.doc(profileUID).onSnapshot((doc) => {
        profileUser.value = doc.data()
      })

      TWEET_COLLECTION.where('uid', '==', profileUID)
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            let tweet = await getTweetInfo(change.doc.data(), currentUser.value)

            if (change.type === 'added') {
              tweets.value.splice(change.newIndex, 0, tweet)
            } else if (change.type === 'modified') {
              tweets.value.splice(change.oldIndex, 1, tweet)
            } else if (change.type === 'removed') {
              tweets.value.splice(change.oldIndex, 1)
            }
          })
        })

      RETWEET_COLLECTION.where('uid', '==', profileUID)
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const doc = await TWEET_COLLECTION.doc(change.doc.data().from_tweet_id).get()
            let tweet = await getTweetInfo(doc.data(), currentUser.value)

            if (change.type === 'added') {
              replies.value.splice(change.newIndex, 0, tweet)
            } else if (change.type === 'modified') {
              replies.value.splice(change.oldIndex, 1, tweet)
            } else if (change.type === 'removed') {
              replies.value.splice(change.oldIndex, 1)
            }
          })
        })

      LIKES_COLLECTION.where('uid', '==', profileUID)
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const doc = await TWEET_COLLECTION.doc(change.doc.data().from_tweet_id).get()
            let tweet = await getTweetInfo(doc.data(), currentUser.value)

            if (change.type === 'added') {
              likes.value.splice(change.newIndex, 0, tweet)
            } else if (change.type === 'modified') {
              likes.value.splice(change.oldIndex, 1, tweet)
            } else if (change.type === 'removed') {
              likes.value.splice(change.oldIndex, 1)
            }
          })
        })
    })

    return { currentUser, tweets, replies, media, likes, moment, currentTab, profileUser, router }
  },
}
</script>

<style>
</style>