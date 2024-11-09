<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    modelValue: string | null
    allowBlank?: boolean
  }>()

  const inputRef = ref<HTMLInputElement>()
  const inputText = defineModel<string>({ default: '' })
  const focus = () => {
    inputRef.value?.focus()
  }
  defineExpose({ focus })
</script>

<template>
  <input
    ref="inputRef"
    v-model="inputText"
    class="focus:outline-none"
    type="text"
  />
</template>
