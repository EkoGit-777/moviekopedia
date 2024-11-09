<script setup lang="ts">
  import { useLanguageStore } from '@/stores/language'
  import searchComponent from './search-component.vue'

  const lang = useLanguageStore()
</script>
<template>
  <div class="h-full bg-gray-50 pt-80">
    <div class="h-full px-96 pt-96 space-y-48 flex flex-col items-center">
      <div class="flex flex-col items-center">
        <img
          class="w-400"
          src="/images/logo.png"
          alt="Logo"
        />
        <div class="font-medium text-18">
          {{ lang.getViewText('dashboard', 'tagline') }}
        </div>
      </div>
      <searchComponent />
    </div>
  </div>
</template>
