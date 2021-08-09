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
          <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer" alt="">
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
          <button @click="showCommentModal = true"><i class="far fa-comment text-gray-400 text-xl hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10"></i></button>
          <button @click="handleRetweet(tweet)"><i :class="[tweet.isRetweeted ? 'text-green-400' : '']" class="fas fa-retweet text-gray-400 text-xl hover:bg-green-50 hover:text-green-400 p-2 rounded-full w-10 h-10"></i></button>
          <button @click="handleLikes(tweet)"><i :class="[tweet.isLiked ? 'text-red-500' : '']" class="far fa-heart text-gray-400 text-xl hover:bg-red-50 hover:text-red-400 p-2 rounded-full w-10 h-10"></i></button>
        </div>
        <div class="h-px w-full bg-gray-100"></div>
        <!-- comments -->
        <div v-for="comment in comments" :key="comment" class="flex hover:bg-gray-50 cursor-pointer px-3 py-2 border-b border-default">
          <img :src="comment.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer" alt="">
          <div class="flex-1 ml-2">
            <div class="flex items-center space-x-2">
              <span class="font-bold">{{ comment.email }}</span>
              <span class="text-gray text-sm">@{{ comment.username }}</span>
              <span class="">{{ moment(comment.created_at).fromNow() }}</span>
            </div>
            <div class="">{{ comment.comment_tweet_body }}</div>
          </div>
          <button @click="handleDeleteComment(comment)" v-if="comment.uid === currentUser.uid">
            <i class="fas fa-trash text-red-400 hover:bg-red-50 w-10 h-10 rounded-full p-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- trend section -->
  <trend-section></trend-section>
  <comment-modal :tweet="tweet" v-if="showCommentModal" @close-modal="showCommentModal = false"></comment-modal>
</template>

<script>
import router from '../router'
import TrendSection from '../components/trends.vue'
import { ref, computed, onBeforeMount } from 'vue'
import store from '../store'
import { COMMENT_COLLECTION, TWEET_COLLECTION } from "../firebase";
import { useRoute } from 'vue-router'
import getTweetInfo from "../untils/getTweetInfo";
import moment from 'moment'
import CommentModal from '../components/commentModal.vue'
import handleRetweet from "../untils/handleRetweet.js";
import handleLikes from "../untils/handleLikes.js";
import firebase from "firebase";

export default {
  components: { TrendSection, CommentModal },
  setup() {
    const tweet = ref(null)
    const comments = ref([])
    const currentUser = computed(() => store.state.user)
    const showCommentModal = ref(false)
    const route = useRoute()

    const handleDeleteComment = async (comment) => {
      if (confirm("Delete Tweet?")) {
        // delete comment
        await COMMENT_COLLECTION.doc(comment.id).delete()
        // decrease tweet num comments
        await TWEET_COLLECTION.doc(comment.from_tweet_id).update({
          num_comments: firebase.firestore.FieldValue.increment(-1),
        })
      }
    }

    onBeforeMount(async () => {
      await TWEET_COLLECTION.doc(route.params.id).onSnapshot(async doc => {
        const t = await getTweetInfo(doc.data(), currentUser.value)
        tweet.value = t
      })

      COMMENT_COLLECTION
        .where('from_tweet_id', '==', route.params.id)
        .orderBy('created_at', 'desc')
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(async change => {
            let comment = await getTweetInfo(change.doc.data(), currentUser.value)
            
            if (change.type === 'added') {
              comments.value.splice(change.newIndex, 0, comment)
            } else if (change.type === 'modified') {
              comments.value.splice(change.oldIndex, 1, comment)
            } else if (change.type === 'removed') {
              comments.value.splice(change.oldIndex, 1)
            }
          })
        })
    })

    return { router, tweet, comments, currentUser, moment, showCommentModal, handleRetweet, handleLikes, handleDeleteComment }
  }
}
</script>

<style>
</style>
