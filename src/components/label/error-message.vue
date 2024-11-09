<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    message?: Array<string>
  }>()
  const text = computed(() => {
    if (Array.isArray(props.message) && props.message.length) {
      return props.message[0]
    }

    return null
  })
</script>
<template>
  <div
    v-if="text"
    class="text-xs py-1 text-red-600"
  >
    {{ text }}
  </div>
</template>
