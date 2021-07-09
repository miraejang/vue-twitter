<template>
  <div class="flex flex-col flex-1 items-center space-y-4 mt-10">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
    <p class="text-2xl font-bold">뜨위떠 회원가입</p>
    <input v-model="email" type="email" class="w-96 px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:border-primary" placeholder="이메일">
    <input v-model="username" type="text" class="w-96 px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:border-primary" placeholder="아이디">
    <input v-model="password" type="password" class="w-96 px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:border-primary" placeholder="비밀번호">
    <button @click ="onRegister" class="w-96 rounded bg-primary text-white py-4 hover:bg-dark">회원가입</button>
    <router-link to="/login">
      <button class="text-primary">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const loading = ref(false)
    const onRegister = () => {
      console.log(email.value, username.value, password.value)
    }
    
    return { email, username, password, loading, onRegister }
  }
}
</script>

<style>
</style>