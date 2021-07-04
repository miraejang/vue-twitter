<template>
  <div class="flex h-screen">
    <!-- side menu -->
    <div class="w-1/4 lg:ml-5 pt-5 pl-5 pr-5 pb-5 flex flex-col justify-between border-r border-gray-200">
      <div class="flex flex-col items-center lg:items-start">
        <!-- logo -->
        <i class="fab fa-twitter text-3xl text-primary ml-4 mb-3"></i>
        <!-- menu -->
        <div class="flex flex-col items-start space-y-1">        
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-home fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">홈</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">탐색하기</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-bell fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">알림</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-envelope fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">쪽지</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-bookmark fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">북마크</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-list-alt fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">리스트</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-user fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">프로필</spa>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <spa class="ml-3 text-lg hidden lg:inline-block">더보기</spa>
          </div>
          <ul></ul>
        </div>
        <div class="mt-3 w-full flex justify-center">
          <button class="bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark">
            <span class="hidden lg:block">Tweet</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <!-- profile button -->
      <div class="mt-3 flex justify-center">
        <button class="px-2 py-1 lg:w-full h-12 rounded-full lg:hover:bg-blue-50 flex items-center">
          <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full lg:hover-opacity-100 hover:opacity-70" alt="">
          <div class="ml-2 hidden lg:block">
            <p class="text-sm font-bold">이름</p>
            <p class="text-xs text-gray-500 text-left">아이디</p>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"></i>
        </button>
      </div>
    </div>

    <!-- content -->
    <div class="flex-1"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>