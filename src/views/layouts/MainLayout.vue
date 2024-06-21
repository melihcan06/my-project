<template>
  <div class="wrapper">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Logout</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>MCK ©2024 Created by MCK</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;

  /* Direction of the items, can be row or column */
  flex-direction: column;
}

header,
footer {
  height: 30px;
}

main {
  flex: 1;
}
</style>
