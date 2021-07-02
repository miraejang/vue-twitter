<template>
  <div class="flex h-screen">
    <div class="w-1/4 mt-5 ml-10">
    <!-- logo -->
      <i class="fab fa-twitter text-2xl text-primary ml-4"></i>
      <!-- side menu -->
      <div class="flex flex-col items-start">        
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
      <div class="w-full h-12">
        <button class="mt-3 bg-primary text-white w-60 h-12 rounded-full hover:bg-dark">
          Tweet
        </button>
      </div>
    </div>
    <div class="flex-1 bg-red-200"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>