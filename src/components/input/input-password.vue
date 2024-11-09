<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    modelValue: string
  }>()
  const emit = defineEmits<{
    (e: 'update:modelValue', data: string): void
  }>()
  const inputRef = ref<HTMLInputElement>()
</script>
<template>
  <input
    ref="inputRef"
    :value="modelValue"
    placeholder="Password"
    class="focus:outline-none"
    autocomplete="current-password"
    name="password"
    type="password"
    @input="
      (event) => emit('update:modelValue', (event.target as HTMLInputElement).value)
    "
  />
</template>
