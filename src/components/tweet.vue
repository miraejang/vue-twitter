<template>
  <div class="flex p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
    <img :src="tweet.profile_image_url" class="w-10 h-10 mr-3 rounded-full hover:opacity-70" alt="">
    <div class="flex flex-1 flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">{{ tweet.email }}</span>
        <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
        <span> · </span>
        <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
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
        <div @click="handleLikes(tweet)"  :class="[tweet.isLiked ? 'text-red-500' : '']"  class="text-gray-500 hover:text-red-500 rounded-full py-3">
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
import moment from "moment";
import { ref } from "vue";
import commentModal from './commentModal.vue';
import handleRetweet from "/src/untils/handleRetweet.js";
import handleLikes from "/src/untils/handleLikes.js";

export default {
  components: { commentModal },
  props: ['currentUser', 'tweet'],
  setup() {
    const showCommentModal = ref(false)

    return { moment, showCommentModal, handleRetweet, handleLikes }
  }
}
</script>

<style>
</style>
