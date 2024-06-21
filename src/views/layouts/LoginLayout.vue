<template>
  <a-layout class="layout">
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        Content
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>
