<template>
  <div class="flex flex-1 h-screen">
    <!-- notifications section -->
    <div class="flex-1 flex-col border-r border-gray-100 overflow-y-auto">
      <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
      <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer" v-for="notification in 10" :key="notification">
        <div class="flex justify-between">
          <img src="https://picsum.photos/120" class="w-10 h-10 rounded-full hover:opacity-70" alt="" />
          <i class="fas fa-ellipsis-h flex w-10 h-10 p-2 rounded-full items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-primary"></i>
        </div>
        <div>
          <span class="font-bold">TOMORROW X TOGETHER</span>
          님의 최근 트윗
        </div>
        <div class="text-gray-500">놀라운 토요일 잘 보셨나요!? 처음이라 떨리기도 했지만 너무 잘 챙겨주셔서 재미있게 하고 왔습니다🥰 다음에 또 불러주세욥!!!ㅎㅎㅎ 🧸</div>
      </div>
    </div>
    <!-- trend section -->
    <trend-section></trend-section>
  </div>
</template>