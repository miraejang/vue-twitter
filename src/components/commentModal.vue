<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div @click="$emit('closeModal')" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- contents -->
      <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        <div class=" flex justify-between items-center p-2 border-b border-default">
          <button @click="$emit('closeModal')" class="fas fa-times text-primary text-lg p-2 w-10 h-10 hover-bg-blue-50 rounded-full"></button>
          <div class="text-right sm:hidden mr-2">
            <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">Reply</button>
            <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">Reply</button>
          </div>
        </div>
        <div>
          <!-- original tweet -->
          <div class="flex px-4 pt-4 pb-3">
            <div class="flex flex-col">
            <img :src="tweet.profile_image_url" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt="">
            <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
            </div>
            <div class="flex-1 ml-2">
              <div class="flex space-x-2">
                <span class="font-bold text-sm">{{ tweet.email }}</span>
                <span class="text-light text-sm">@{{ tweet.username }}</span>
                <span class="text-light text-sm">{{ moment(tweet.create_at).fromNow() }}</span>
              </div>
              <div class="text-sm">{{ tweet.tweet_body }}</div>
              <div>
                <span class="text-primary text-sm">@{{ tweet.username }}</span>
                <span class="text-gray text-sm">님에게 보내는 답글</span>
              </div>
            </div>
          </div>
          <div class="flex px-4 pb-4">
            <!-- <img :src="currentUser.profile_image_url" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt=""> -->
            <img :src="currentUser.profile_image_url" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt="">
            <div class="flex flex-1 flex-col">
              <textarea v-model="tweetBody" rows="5" class="w-full text-lg font-bold focus:outline-none resize-none" placeholder="Tweet yout reply"></textarea>
              <div class="text-right hidden sm:block">
                <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">Reply</button>
                <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import moment from "moment";
import store from "/src/store";
import firebase from "firebase";
import { COMMENT_COLLECTION, TWEET_COLLECTION } from "/src/firebase";

export default {
  props: ['tweet'],
  setup(props, {emit}) {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)

    const onCommentTweet = async () => {
      try {
        const doc = COMMENT_COLLECTION.doc()
        await doc.set({
          id: doc.id,
          from_tweet_id: props.tweet.id,
          comment_tweet_body: tweetBody.value,
          uid: currentUser.value.uid,
          created_at: Date.now(),
        })

        await TWEET_COLLECTION.doc(props.tweet.id).update({
          num_comments: firebase.firestore.FieldValue.increment(1)
        })
        emit('close-modal')
      } catch (e) {
        console.log("on comment tweet error: ", e);
      }
    }

    return { tweetBody, moment, currentUser, onCommentTweet }
  },
};
</script>

<style>
</style>