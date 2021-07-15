<template>
  <div class="flex p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
    <img :src="currentUser.profile_image_url" class="w-10 h-10 mr-3 rounded-full hover:opacity-70" alt="">
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
</template>

<script>
export default {
  props: ['currentUser']
}
</script>

<style>
</style>