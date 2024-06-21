<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const layout = ref()

watch(
  () => route.meta.layout,
  (value) => {
    layout.value = defineAsyncComponent(() => import(`./views/layouts/${value}.vue`))
  }
)
</script>

<template>
  <component :is="layout" />
  <div class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Logout</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped></style>
