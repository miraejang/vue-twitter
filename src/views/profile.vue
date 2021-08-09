<template>
  <div class="flex flex-1 h-screen">
    <!-- profile section -->
    <div class="felx flex-1 flex-col border-r border-default">
      <!-- title -->
      <div class="flex px-3 py-1 border-b border-default">
        <button class="mr-2">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover: bg-blue-50"></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">{{ currentUser.email }}</div>
          <div class="text-xs text-light">{{ currentUser.num_tweets }} Tweets</div>
        </div>
      </div>
      <!-- profile image -->
      <div class="h-40 bg-gray-300 relative flex-none">
        <div class="absolute -bottom-14 left-2- w-28 h-28 rounded-full border-4 border-white bg-gray-100">
          <img :src="currentUser.profile_image_url" class="rounded-full opacity-90 hover:opacity-100 cursor-pointer" alt="">
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <button class="border-2 text-primary border-primary px-3 py-1 hover:bg-blue-50 font-bold rounded-full">Edit profile</button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">{{ currentUser.email }}</div>
        <div class="text-light">{{ currentUser.username }}</div>
        <div>
          <span class="text-light">Joined </span>
          <span class="text-light">{{ moment(currentUser.created_at).format('LL') }}</span>
        </div>
        <div>
          <span class="font-bold mr-1">{{ currentUser.followings.length }}</span>
          <span class="text-light mr-3">팔로우 중</span>
          <span class="font-bold mr-1">{{ currentUser.followers.length }}</span>
          <span class="text-light">팔로워</span>
        </div>
      </div>
      <!-- tabs -->
      <div class="flex justify-between border-b border-default mt-3">
        <div class="w-1/4 py-3 border-b border-primary font-bold text-primary text-center hover:bg-blue-50 hover:text-primary cursor-pointer">트윗</div>
        <div class="w-1/4 py-3 border-b border-primary font-bold text-light text-center hover:bg-blue-50 hover:text-primary cursor-pointer">트윗 및 답글</div>
        <div class="w-1/4 py-3 border-b border-primary font-bold text-light text-center hover:bg-blue-50 hover:text-primary cursor-pointer">미디어</div>
        <div class="w-1/4 py-3 border-b border-primary font-bold text-light text-center hover:bg-blue-50 hover:text-primary cursor-pointer">마음에 들어요</div>
      </div>
      <!-- tweets -->
      <div class="overflow-y-scroll">
        <tweet-form v-for="tweet in tweets" :key="tweet.id" :currentUser="currentUser" :tweet="tweet"></tweet-form>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>

<script>
import { computed, ref, onBeforeMount } from '@vue/runtime-core'
import TrendSection from "../components/trends.vue"
import TweetForm from "../components/tweet.vue"
import store from '../store'
import { TWEET_COLLECTION, USER_COLLECTION } from '../firebase'
import getTweetInfo from '../untils/getTweetInfo'
import moment from 'moment'

export default {
  components: { TrendSection, TweetForm },
  setup() {
    const currentUser = computed(() => store.state.user)
    const tweets = ref([])
    onBeforeMount(() => {
      USER_COLLECTION.doc(currentUser.value.uid).onSnapshot(doc => {
        store.commit('SET_USER', doc.data())
      })

      TWEET_COLLECTION
        .where('uid', '==', currentUser.value.uid)
        .orderBy('created_at', 'desc')
        .onSnapshot(snapshot => {
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
    })

    return { currentUser, tweets, moment }
  }
}
</script>

<style>
</style>