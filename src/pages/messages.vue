<template>
  <div class="flex flex-1 h-screen">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-scroll">
    <div class="flex flex-col">
      <div class="p-3 font-bold text-lg border-b border-gray-100">쪽지</div>
      <div class="flex px-3 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer" v-for="message in 20" :key="message">
        <img src="https://picsum.photos/200" class="w-10 h-10 mr-2 rounded-full" alt="">
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>