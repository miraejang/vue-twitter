<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div @click="$emit('closeModal')" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- contents -->
      <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        <div class=" flex justify-between items-center p-2 border-b border-default">
          <button @click="$emit('closeModal')" class="fas fa-times text-primary text-lg p-2 w-10 h-10 hover-bg-blue-50 rounded-full"></button>
          <div class="text-right sm:hidden mr-2">
            <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
            <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
          </div>
        </div>
        <div class="flex p-4">
          <!-- <img :src="currentUser.profile_image_url" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt=""> -->
          <img src="https://picsum.photos/200" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt="">
          <div class="flex flex-1 flex-col">
            <textarea v-model="tweetBody" rows="5" class="w-full text-lg font-bold focus:outline-none resize-none" placeholder="무슨 일이 일어나고 있나요?"></textarea>
            <div class="text-right hidden sm:block">
              <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
              <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tweetBody = ref('')

    return { tweetBody }
  }
}
</script>

<style>

</style>