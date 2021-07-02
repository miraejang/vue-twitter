<template>
  <div class="flex h-screen">
    <!-- side menu -->
    <div class="w-1/4 mt-5 ml-10 flex flex-col justify-between">
      <div>
        <!-- logo -->
        <i class="fab fa-twitter text-3xl text-primary ml-4"></i>
        <!-- menu -->
        <div class="flex flex-col items-start space-y-1">        
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-home fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">홈</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">탐색하기</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-bell fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">알림</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-envelope fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">쪽지</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-bookmark fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">북마크</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-list-alt fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">리스트</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-user fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">프로필</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg">더보기</spa>
          </div>
          <ul></ul>
        </div>
        <div class="mr-3">
          <button class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark">
            Tweet
          </button>
        </div>
      </div>
      <!-- profile button -->
      <div class="mr-3 mb-3">
        <button class="mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 flex items-center">
          <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full" alt="">
          <div class="ml-2">
            <p class="text-sm font-bold">이름</p>
            <p class="text-xs text-gray-500 text-left">아이디</p>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
        </button>
      </div>
    </div>

    <!-- content -->
    <div class="flex-1 bg-red-200"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>