<template>
  <div class="flex flex-1 h-screen">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-scroll">
      <div class="flex flex-col">
        <div class="h-14 p-3 font-bold text-lg border-b border-gray-100">쪽지</div>
        <div class="flex px-3 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer" v-for="message in 20" :key="message">
          <img src="https://picsum.photos/200" class="w-10 h-10 mr-2 rounded-full" alt="" />
          <div>
            <div class="flex space-x-1">
              <div class="font-bold">mirae.com</div>
              <div class="text-gray-500">@mirae</div>
              <div class="text-gray-500">7월 6일</div>
            </div>
            <div class="text-gray-500">메세지</div>
          </div>
        </div>
      </div>
    </div>
    <!-- chatting -->
    <div class="w-3/5 border-r border-gray-100">
      <div class="flex flex-col h-screen">
        <!-- title -->
        <div class="flex h-14 px-3 items-center border-b border-gray-100">
          <img src="https://picsum.photos/100" class="w-8 h-8 rounded-full mr-2 cursor-pointer" alt="" />
          <div>
            <div class="font-bold text-lg">mirae.com</div>
            <div class="text-sm text-gray-500">@mirae</div>
          </div>
        </div>
        <!-- user info -->
        <div class="flex py-6 flex-col justify-center items-center border-b border-gray-100 hover:bg-gray-50 text-gray-500">
          <div>
            <span class="mr-3 font-bold text-black">mirae.com</span>
            <span>@jangmirae</span>
          </div>
          <div><span class="mr-3 font-bold text-black">28</span><span>팔우로 중</span> <span class="font-bold text-black">7</span><span>팔로워</span></div>
          <div>
            <span>가입일</span>
            <span>2011년 10월</span>
          </div>
        </div>
        <!-- chat bubble -->
        <div class="flex-1 overflow-y-scroll">
          <!-- chat bubble : my chat -->
          <div class="p-3 text-right">
            <span class="bg-primary text-white px-4 py-2 rounded-full">메시지</span>
            <div class="mt-2 text-xs text-gray-500">2021년 7월 8일 오후 3:08</div>
          </div>
          <!-- chat bubble : opponent chat -->
          <div class="p-3 text-left" v-for="chat in 20" :key="chat">
            <span class="bg-gray-50 px-4 py-2 rounded-full">메시지</span>
            <div class="mt-2 text-xs text-gray-500">2021년 7월 8일 오후 3:08</div>
          </div>
        </div>
        <!-- chat input -->
        <div class="flex items-center bg-white border-gray-100 sticky">
          <input type="text" class="m-2 px-4 py-1 rounded-full bg-gray-100 resize-none outline-none flex-1" placeholder="새 쪽지 작성하기" />
          <button class="text-center">
            <i class="far fa-paper-plane w-10 h-10 p-2 text-primary text-lg hover:bg-blue-50 rounded-full"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>