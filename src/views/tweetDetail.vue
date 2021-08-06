<template>
  <div class="flex flex-1">
    <div class="flex-1 border-r border-default">
      <div class="flex flex-col" v-if="tweet">
        <!-- title -->
        <div class="flex items-center px-3 py-2 border-b border-default">
          <button @click="router.go(-1)">
            <i class="fas fa-arrow-left text-primary text-lg ml-3 hover:bg-blue-50 p-2 rounded-full w-10 h-10"></i>
          </button>
          <span class="font-bold text-lg ml-6">Tweet</span>
        </div>
        <!-- tweet -->
        <div class="flex px-3 py-2">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer" alt="">
          <div class="ml-2">
            <p class="font-bold">{{ tweet.email }}</p>
            <p class="text-gray text-sm">@{{ tweet.username }}</p>
          </div>
        </div>
        <div class="px-3 py-2">{{ tweet.tweet_body }}</div>
        <div class="px-3 py-2 text-gray text-xs">{{ moment(tweet.created_at).fromNow() }}</div>
        <div class="h-px w-full bg-gray-100"></div>
        <div class="flex space-x-2 items-center px-3 py-2">
          <span class="">{{ tweet.num_retweets }}</span>
          <span class="text-sm text-gray">Retweets</span>
          <span class="ml-5">0</span>
          <span class="text-sm text-gray">Quote Tweets</span>
          <span class="ml-5">{{ tweet.num_likes }}</span>
          <span class="text-sm text-gray">Likes</span>
        </div>
        <div class="h-px w-full bg-gray-100"></div>
        <!-- buttons -->
        <div class="flex justify-around py-2">
          <button><i class="far fa-comment text-gray-400 text-xl hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10"></i></button>
          <button><i class="fas fa-retweet text-gray-400 text-xl hover:bg-green-50 hover:text-green-400 p-2 rounded-full w-10 h-10"></i></button>
          <button><i class="far fa-heart text-gray-400 text-xl hover:bg-red-50 hover:text-red-400 p-2 rounded-full w-10 h-10"></i></button>
        </div>
        <div class="h-px w-full bg-gray-100"></div>
        <!-- comments -->
        <div v-for="comment in 10" :key="comment" class="flex hover:bg-gray-100 cursor-pointer px-3 py-2 border-b border-default">
          <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer" alt="">
          <div class="flex-1 ml-2">
            <div class="flex items-center space-x-2">
              <span class="font-bold">이메일</span>
              <span class="text-gray text-sm">@아이디</span>
              <span class="">19 day aro</span>
            </div>
            <div class="">댓글</div>
          </div>
          <button>
            <i class="fas fa-trash text-red-400 hover:bg-red-50 w-10 h-10 rounded-full p-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- trend section -->
  <trend-section></trend-section>
</template>

<script>
import router from '../router'
import TrendSection from '../components/trends.vue'
import { ref, computed, onBeforeMount } from 'vue'
import store from '../store'
import { TWEET_COLLECTION } from "../firebase";
import { useRoute } from 'vue-router'
import getTweetInfo from "../untils/getTweetInfo";
import moment from 'moment'

export default {
  components: { TrendSection },
  setup() {
    const tweet = ref(null)
    const comments = ref([])
    const currentUser = computed(() => store.state.user)
    const route = useRoute()

    onBeforeMount(async () => {
      await TWEET_COLLECTION.doc(route.params.id).onSnapshot(async doc => {
        const t = await getTweetInfo(doc.data(), currentUser.value)
        tweet.value = t
      })
    })

    return { router, tweet, comments, currentUser, moment }
  }
}
</script>

<style>
</style>
