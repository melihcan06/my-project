<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

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
</template>

<style scoped></style>
