<script setup lang="ts">
  import navbarComponent from './navbar-component.vue'
</script>
<template>
  <div class="h-screen">
    <navbarComponent />
    <router-view :key="$route.fullPath" />
  </div>
</template>
