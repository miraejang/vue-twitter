<template>
  <div class="hidden lg:block lg:w-2/5 px-4 py-2">
    <div class="relative">
      <input type="text" class="rounded-full w-full p-2 pl-10 bg-gray-100 text-sm focus:ring-1 focus:ring-primary focus:bg-white focus:outline-none" placeholder="트위터 검색">
      <i class="fas fa-search absolute left-0 m-3 text-light"></i>
    </div>
    <!-- trend for me -->
    <div class="mt-5 w-full rounded-xl bg-gray-50 flex flex-col">
      <div class="flex items-center justify-between px-3 py-1 border-gray-100">
        <span class="text-lg font-bold">나를 위한 트렌드</span>
        <i class="fas fa-cog text-center text-lg text-primary hover:bg-blue-50"></i>
      </div>            
      <div class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer" v-for="trend in 3" :key="trend">
        <div class="flex">
          <div class="flex flex-1 flex-col">
            <div class="text-gray-500">대한민국에서 트렌드 중</div>
            <div class="font-bold text-lg">러블리즈</div>
            <div class="text-gray-500">3,564 트윗</div>
          </div>
          <i class="fas fa-ellipsis-h text-gray-500"></i>
        </div>
      </div>
      <div class="px-4 py-2 hover:text-gray-100 cursor-pointer">
        <span class="text-primary text-lg rounded-t-xl">더보기</span>
      </div>
    </div>
    <!-- follow recommends for me -->
    <div class="mt-3 w-full rounded-xl bg-gray-50 flex flex-col">
      <div class="p-3 border-gray-100">
        <span class="text-lg font-bold">팔로우 추천</span>
      </div>            
      <div class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer" v-for="trend in 3" :key="trend">
        <div class="flex items-center">
          <img src="https://picsum.photos/200" class="w-12 h-12 rounded-full mr-2" alt="">
          <div class="flex flex-1 flex-col">
            <div class="font-bold">방탄소년단</div>
            <div class="text-gray-500 text-sm overflow-ellipsis">@BTS</div>
          </div>
          <div>
            <button class="border-2 border-primary hover:bg-blue-100 px-4 py-1 text-sm text-primary rounded-full">팔로우</button>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 hover:text-gray-100 cursor-pointer">
        <span class="text-primary text-lg rounded-t-xl">더보기</span>
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