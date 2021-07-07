<template>
  <div class="flex flex-1 h-screen">
    <!-- main section -->
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
      <div class="felx flex-col">
        <!-- page title -->
        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
        <!-- tweeting section -->
        <div class="flex p-3 border-b-8 border-gray-100">
          <img src="https://picsum.photos/200" class="w-10 h-10 mr-2 rounded-full hover:opacity-70 cursor-pointer" alt="">
          <div class="flex flex-1 flex-col">
            <textarea class="w-full text-lg font-bold focus:outline-none resize-none" placeholder="무슨 일이 일어나고 있나요?"></textarea>
            <div class="text-right">
              <button class="bg-primary hover:bg-dark text-sm font-bold text-white mt-3 px-4 py-2 rounded-full">트윗</button>
            </div>
          </div>
        </div>
        <!-- tweets -->
        <tweet-form v-for="tweet in 10" :key="tweet"></tweet-form>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>

<script>
import TrendSection from "../components/trends.vue";
import TweetForm from "../components/tweet.vue";
export default {
  components: { TrendSection, TweetForm }
}
</script>

<style>

</style>