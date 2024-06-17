<script setup lang="ts">
import { RouterView } from 'vue-router'
// import LoginService from './components/login/LoginService'

// function logout() {
//   LoginService.logout()
// }
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
</template>

<style scoped></style>
