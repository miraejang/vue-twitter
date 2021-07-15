<template>
  <div class="flex flex-1 h-screen">
    <!-- main section -->
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
      <div class="felx flex-col">
        <!-- page title -->
        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
        <!-- tweeting section -->
        <div class="flex p-3 border-b-8 border-gray-100">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt="">
          <div class="flex flex-1 flex-col">
            <textarea v-model="tweetBody" class="w-full text-lg font-bold focus:outline-none resize-none" placeholder="무슨 일이 일어나고 있나요?"></textarea>
            <div class="text-right">
              <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white mt-3 px-4 py-2 rounded-full">트윗</button>
              <button v-else @click="onAddTweeet" class="bg-primary hover:bg-dark text-sm font-bold text-white mt-3 px-4 py-2 rounded-full">트윗</button>
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
import TrendSection from "../components/trends.vue"
import TweetForm from "../components/tweet.vue"
import { ref, computed, onBeforeMount } from "vue";
import store from "/src/store";
import { TWEET_COLLECTION } from "/src/firebase";

export default {
  components: { TrendSection, TweetForm },
  setup() {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)
    const tweets = ref([])

    onBeforeMount(() => {
      TWEET_COLLECTION.orderBy('created_at', 'desc').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            tweets.value.splice(change.newIndex, 0, change.doc.data())
          } else if (change.type === 'modified') {
            tweets.value.splice(change.oldIndex, 1, change.doc.data())
          } else if (change.type === 'removed') {
            tweets.value.splice(change.oldIndex, 1)
          }
        })
      })
    })

    const onAddTweeet = async () => {
      try {
        const doc = TWEET_COLLECTION.doc()
        await doc.set({
          id: doc.id,
          tweet_body: tweetBody.value,
          uid: currentUser.value.uid,
          created_at: Date.now(),
          num_comments: 0,
          num_retweets: 0,
          num_links: 0,
        })
      } catch (e) {
        console.log('on add tweet wrror on homepage: ', e)
      }
    }

    return { tweetBody, currentUser, tweets, onAddTweeet }
  },
}
</script>

<style>
</style>