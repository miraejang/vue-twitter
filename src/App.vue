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
    <div class="flex-1">
      <div class="flex h-screen">
        <!-- main section -->
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
            <div class="flex p-3 border-b border-gray-100">
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
        <!-- trend section -->
        <div class="w-2/5">trend</div>
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