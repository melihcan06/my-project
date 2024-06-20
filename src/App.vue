<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login" props:{ doLogout="false" }>Logout</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped></style>
