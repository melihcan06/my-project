<script setup lang="ts">
import { defineAsyncComponent, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = shallowRef()

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
