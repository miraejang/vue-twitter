<template>
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
      <div class="flex p-3 border-b border-gray-100" v-for="tweet in 20" :key="tweet">
        <img src="https://picsum.photos/200" class="w-10 h-10 mr-3 rounded-full hover:opacity-70 cursor-pointer" alt="">
        <div class="flex flex-1 flex-col space-y-1">
          <div class="text-sm space-x-1">
            <span class="font-bold">방탄소년단</span>
            <span class="text-gray-500 text-xs">@BTS_twt</span>
            <span> · </span>
            <span class="text-gray-500 text-xs">7월 5일</span>
          </div>
          <div>
            다시 한 번 축하드려요 우리 아미
            그리고 다시 한 번 감사드립니다.
            그리고 더 힘내서 앞으로 나아갈게요.
            사랑합니다.
          </div>
          <div class="flex justify-between">
            <div class="text-gray-500 hover:text-primary rounded-full py-3">
              <i class="far fa-comment hover:bg-blue-50"></i>
              <span class="ml-1 text-sm">11</span>
            </div>
            <div class="text-gray-500 hover:green-500 rounded-full py-3">
              <i class="fas fa-retweet hover:bg-green-50"></i>
              <span class="ml-1 text-sm">11</span>
            </div>
            <div class="text-gray-500 hover:red-500 rounded-full py-3">
              <i class="far fa-heart hover:bg-green-50"></i>
              <span class="ml-1 text-sm">11</span>
            </div>
            <div class="text-gray-500 hover:green-500 rounded-full py-3">
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>