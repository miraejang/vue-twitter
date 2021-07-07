<template>
  <div class="flex flex-1">
    <!-- profile section -->
    <div class="felx flex-1 flex-col border-r border-default">
      <!-- title -->
      <div class="flex px-3 py-1 border-b border-default">
        <button class="mr-2">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover: bg-blue-50"></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">mirae.com</div>
          <div class="text-xs text-light">544 트윗</div>
        </div>
      </div>
      <!-- profile image -->
      <div class="h-40 bg-gray-300 relative">        
        <div class="absolute -bottom-14 left-2- w-28 h-28 rounded-full border-4 border-white bg-gray-100">
          <img src="https://picsum.photos/200" class="rounded-full opacity-90 hover:opacity-100 cursor-pointer" alt="">
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <button class="border-2 text-primary border-primary px-3 py-1 hover:bg-blue-50 font-bold rounded-full">프로필 수정</button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">mirae.com</div>
        <div class="text-light">mirae@com</div>
        <div>
          <span class="text-light">가입일:</span>
          <span class="text-light">2020년 3월</span>
        </div>
        <div>
          <span class="font-bold mr-1">28</span>
          <span class="text-light mr-3">팔로우 중</span>
          <span class="font-bold mr-1">7</span>
          <span class="text-light">팔로워</span>
        </div>
      </div>
      <!-- tabs -->
      <div class="flex justify-between border-b border-default mt-3">
        <div class="w-1/4 py-3 border-b border-primary font-bold text-primary text-center hover:bg-blue-50 hover:text-primary cursor-pointer">트윗</div>
        <div class="w-1/4 py-3 border-b border-primary font-bold text-light text-center hover:bg-blue-50 hover:text-primary cursor-pointer">트윗 및 답글</div>
        <div class="w-1/4 py-3 border-b border-primary font-bold text-light text-center hover:bg-blue-50 hover:text-primary cursor-pointer">미디어</div>
        <div class="w-1/4 py-3 border-b border-primary font-bold text-light text-center hover:bg-blue-50 hover:text-primary cursor-pointer">마음에 들어요</div>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>

<script>
import TrendSection from "../components/trends.vue";
export default {
  components: { TrendSection }
}
</script>

<style>

</style>