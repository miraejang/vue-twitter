<template>
  <div class="flex p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
    <router-link :to="`/profile/${tweet.uid}`">
      <img :src="tweet.profile_image_url" class="w-10 h-10 mr-3 rounded-full hover:opacity-70" alt="" />
    </router-link>
    <div class="flex flex-1 flex-col space-y-1">
      <div class="text-sm flex justify-between items-center">
        <div class="space-x-1">
          <span class="font-bold">{{ tweet.email }}</span>
          <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
          <span> · </span>
          <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
        </div>
        <button @click="onDeleteTweet(tweet)" v-if="currentUser.uid === tweet.uid">
          <i class="fas fa-trash text-red-400 rounded-full hover:bg-red-50"></i>
        </button>
      </div>
      <router-link :to="`/tweet/${tweet.id}`">{{ tweet.tweet_body }}</router-link>
      <div class="flex justify-between">
        <!-- comment button -->
        <div @click="showCommentModal = true" class="text-gray-500 hover:text-primary rounded-full py-3">
          <i class="far fa-comment hover:bg-blue-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
        </div>
        <!-- retweet button -->
        <div @click="handleRetweet(tweet)" :class="[tweet.isRetweeted ? 'text-green-400' : '']" class="text-gray-500 hover:text-green-500 rounded-full py-3">
          <i class="fas fa-retweet hover:bg-green-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <!-- link button -->
        <div @click="handleLikes(tweet)" :class="[tweet.isLiked ? 'text-red-500' : '']" class="text-gray-500 hover:text-red-500 rounded-full py-3">
          <i class="far fa-heart hover:bg-red-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <!-- share button -->
        <div class="text-gray-500 hover:text-green-500 rounded-full py-3">
          <i class="far fa-share-square hover:bg-blue-50 p-2 rounded-full"></i>
        </div>
      </div>
    </div>
  </div>
  <comment-modal :tweet="tweet" v-if="showCommentModal" @close-modal="showCommentModal = false"></comment-modal>
</template>

<script>
import moment from 'moment'
import { ref } from 'vue'
import commentModal from './commentModal.vue'
import handleRetweet from '/src/untils/handleRetweet.js'
import handleLikes from '/src/untils/handleLikes.js'
import { COMMENT_COLLECTION, LIKES_COLLECTION, RETWEET_COLLECTION, TWEET_COLLECTION, USER_COLLECTION } from '../firebase'
import firebase from 'firebase'

export default {
  components: { commentModal },
  props: ['currentUser', 'tweet'],
  setup() {
    const showCommentModal = ref(false)

    const onDeleteTweet = async (tweet) => {
      if (confirm('Delete Tweet?')) {
        // delete tweet
        await TWEET_COLLECTION.doc(tweet.id).delete()
        // delete comments
        const commentSnapshot = await COMMENT_COLLECTION.where('from_tweet_id', '==', tweet.id).get()
        commentSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
        // delete likes
        const likeSnapshot = await LIKES_COLLECTION.where('from_tweet_id', '==', tweet.id).get()
        likeSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
        // delete retweets
        const retweetSnapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).get()
        retweetSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
        // delete collection - num_tweets(-1)}
        USER_COLLECTION.doc(tweet.uid).update({
          num_tweets: firebase.firestore.FieldValue.increment(-1),
        })
      }
    }

    return { moment, showCommentModal, handleRetweet, handleLikes, onDeleteTweet }
  },
}
</script>

<style>
</style>
