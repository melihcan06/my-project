<script setup lang="ts">
import { reactive } from 'vue'

const loginProperties = reactive({
  username: '',
  password: ''
})

function execLogin() {
  console.log(loginProperties.username)
  console.log(loginProperties.password)
}
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
