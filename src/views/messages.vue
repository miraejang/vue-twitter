<template>
  <div class="flex flex-1 h-screen">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-scroll">
      <div class="flex flex-col">
        <div class="h-14 p-3 font-bold text-lg border-b border-gray-100">쪽지</div>
        <!-- user list -->
        <div @click="onSelectUser(user)" v-for="user in users" :key="user.id" class="flex items-center px-3 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <img :src="user.profile_image_url" class="w-10 h-10 mr-2 rounded-full" alt="" />
          <div class="flex space-x-1">
            <div class="font-bold">{{ user.meil }}</div>
            <div class="text-gray-500">@{{ user.username }}</div>
            <div class="text-gray-500">{{ moment(user.created_at).format(LL) }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- chatting -->
    <div v-if="selectedUser" class="w-3/5 border-r border-gray-100">
      <div class="flex flex-col h-screen">
        <!-- title -->
        <div class="flex h-14 px-3 items-center border-b border-gray-100">
          <img :src="selectedUser.profile_image_url" class="w-8 h-8 rounded-full mr-2 cursor-pointer" alt="" />
          <div>
            <div class="font-bold text-lg">{{ selectedUser.email }}</div>
            <div class="text-sm text-gray-500">@{{ selectedUser.username }}</div>
          </div>
        </div>
        <!-- user info -->
        <div class="flex py-6 flex-col justify-center items-center border-b border-gray-100 hover:bg-gray-50 text-gray-500">
          <div>
            <span class="mr-3 font-bold text-black">{{ selectedUser.email }}</span>
            <span>@{{ selectedUser.username }}</span>
          </div>
          <div>
            <span class="mr-3 font-bold text-black">{{ selectedUser.followings.length }}</span>
            <span>팔우로 중</span>
            <span class="font-bold text-black">{{ selectedUser.followers.length }}</span>
            <span>팔로워</span>
          </div>
          <div>
            <span>가입일</span>
            <span>{{ moment(selectedUser.created_at).format(LL) }}</span>
          </div>
        </div>
        <!-- chat bubble -->
        <div class="flex-1 overflow-y-scroll">
          <div v-for="message in messages" :key="message.id">
            <!-- chat bubble : my chat -->
            <div v-if="currentUser.uid === message.from_uid" class="p-3 text-right">
              <span class="bg-primary text-white px-4 py-2 rounded-full">{{ message.message_body }}</span>
              <div class="mt-2 text-xs text-gray-500">{{ moment(message.created_at).fromNow() }}</div>
            </div>
            <!-- chat bubble : opponent chat -->
            <div v-else class="p-3 text-left">
              <span class="bg-gray-50 px-4 py-2 rounded-full">{{ message.message_body }}</span>
              <div class="mt-2 text-xs text-gray-500">{{ moment(message.created_at).fromNow() }}</div>
            </div>
          </div>
        </div>
        <!-- chat input -->
        <div class="flex items-center bg-white border-gray-100 sticky">
          <input @keyup.enter="onSendMessage" v-model="messageBody" type="text" class="m-2 px-4 py-1 rounded-full bg-gray-100 resize-none outline-none flex-1" placeholder="새 쪽지 작성하기" />
          <button @click="onSendMessage" class="text-center">
            <i class="far fa-paper-plane w-10 h-10 p-2 text-primary text-lg hover:bg-blue-50 rounded-full"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="w-3/5 border-r border-gray-100 text-center flex flex-col justify-center">
      <p class="text-lg font-bold">You don’t have a message selected</p>
      <p class="text-light text-sm">Choose one from your existing messages, or start a new one.</p>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from 'vue'
import { MESSAGE_COLLECTION, USER_COLLECTION } from '../firebase'
import store from '../store'
import moment from 'moment'

export default {
  setup() {
    const currentUser = computed(() => store.state.user)
    const users = ref([])
    const selectedUser = ref(null)
    const messageBody = ref('')
    const messages = ref([])

    onBeforeMount(async () => {
      const snapshot = await USER_COLLECTION.orderBy('created_at', 'desc').get()
      snapshot.docs.forEach((doc) => {
        let user = doc.data()
        if (user.email === currentUser.value.email) return
        users.value.push(user)
      })
    })

    const onSelectUser = async (user) => {
      selectedUser.value = user

      let snapshot = await MESSAGE_COLLECTION.where('from_uid', '==', currentUser.value.uid).where('to_uid', '==', selectedUser.value.uid).get()
      messages.value = snapshot.docs.map((doc) => doc.data())

      snapshot = await MESSAGE_COLLECTION.where('to_uid', '==', currentUser.value.uid).where('from_uid', '==', selectedUser.value.uid).get()
      snapshot.docs.map((doc) => messages.value.push(doc.data()))

      messages.value = messages.value.sort((a, b) => (a.created_at > b.created_at ? 0 : -1))
    }

    const onSendMessage = async () => {
      if (!messageBody.value || !selectedUser.value) return
      const doc = MESSAGE_COLLECTION.doc()
      let message = {
        id: doc.id,
        from_uid: currentUser.value.uid,
        to_uid: selectedUser.value.uid,
        message_body: messageBody.value,
        created_at: Date.now(),
      }
      await doc.set(message)
      messages.value.push(message)
      messageBody.value = ''
    }

    return { moment, currentUser, users, selectedUser, messageBody, messages, onSelectUser, onSendMessage }
  },
}
</script>

<style>
</style>