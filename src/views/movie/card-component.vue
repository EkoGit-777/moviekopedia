<script setup lang="ts">
  defineProps<{
    movie: MovieType
  }>()
</script>
<template>
  <div class="flex flex-col w-full h-full bg-blue-900 p-4 relative">
    <div class="h-full w-full flex-grow-0">
      <img
        v-lazy="movie.poster"
        class="w-full"
      />
    </div>
    <div class="h-48 flex-none py-8 px-4 text-yellow-400 text-12 line-clamp-2">
      {{ movie.title }}
    </div>
  </div>
</template>
