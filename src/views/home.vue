<template>
  <div class="flex flex-1 h-screen">
    <!-- main section -->
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
      <div class="felx flex-col">
        <!-- page title -->
        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
        <!-- tweeting section -->
        <div class="flex p-3 border-b-8 border-gray-100">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt="" />
          <div class="flex flex-1 flex-col">
            <textarea v-model="tweetBody" class="w-full text-lg font-bold focus:outline-none resize-none" placeholder="무슨 일이 일어나고 있나요?"></textarea>
            <div class="text-right">
              <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white mt-3 px-4 py-2 rounded-full">트윗</button>
              <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white mt-3 px-4 py-2 rounded-full">트윗</button>
            </div>
          </div>
        </div>
        <!-- tweets -->
        <tweet-form :currentUser="currentUser" :tweet="tweet" v-for="tweet in tweets" :key="tweet.id"></tweet-form>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>

<script>
import TrendSection from '/src/components/trends.vue'
import TweetForm from '/src/components/tweet.vue'
import { ref, computed, onBeforeMount } from 'vue'
import store from '/src/store'
import { TWEET_COLLECTION } from '/src/firebase'
import addTweet from '/src/untils/addTweet.js'
import getTweetInfo from '/src/untils/getTweetInfo.js'

export default {
  components: { TrendSection, TweetForm },
  setup() {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)
    const tweets = ref([])

    onBeforeMount(() => {
      TWEET_COLLECTION.orderBy('created_at', 'desc').onSnapshot((snapshot) => {
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

    const onAddTweet = async () => {
      try {
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = ''
      } catch (e) {
        console.log('on add tweet wrror on homepage: ', e)
      }
    }

    return { tweetBody, currentUser, tweets, onAddTweet }
  },
}
</script>

<style>
</style>