<template>
  <div class="flex flex-col flex-1 items-center space-y-4 mt-10">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
    <p class="text-2xl font-bold">뜨위떠 로그인</p>
    <input v-model="id" type="email" class="w-96 px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:border-primary" placeholder="아이디">
    <input v-model="password" type="password" class="w-96 px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:border-primary" placeholder="비밀번호">
    <button @click ="onLogin" class="w-96 rounded bg-primary text-white py-4 hover:bg-dark">로그인</button>
    <router-link to="/register">
      <button class="text-primary">계정이 없으신가요? 회원가입 하기</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const id = ref('')
    const password = ref('')
    const loading = ref(false)
    const onLogin = () => {
      console.log(id.value, password.value)
    }
    
    return { id, password, loading, onLogin }
  }
}
</script>

<style>
</style>