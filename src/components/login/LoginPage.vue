<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const loginProperties = reactive({
  username: '',
  password: ''
})

const authStore = useAuthStore()

async function execLogin() {
  console.log(loginProperties.username)
  console.log(loginProperties.password)
  const isAuth = await authStore.login(loginProperties.username, loginProperties.password)
  if (isAuth) {
    location.href = '/'
  }
}

onMounted(() => {
  //authStore.logout()
})
</script>

<template>
  <div>
    Login Page
    <br />
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" value="" v-model="loginProperties.username" />
    <br />
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      value=""
      v-model="loginProperties.password"
    />
    <br />
    <button @click="execLogin">Login</button>
  </div>
</template>
