<script setup lang="ts">
import { RouterView } from 'vue-router'
// import LoginService from './components/login/LoginService'

// function logout() {
//   LoginService.logout()
// }
function test() {
  //debugger
}
</script>

<template>
  <div class="header">
    <!-- App vue sayfası -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Logout</RouterLink>
      <!-- <button @click="logout">Logout</button> -->
    </nav>
  </div>
  <RouterView />
  <button @click="test">TEST</button>
</template>

<style scoped></style>
