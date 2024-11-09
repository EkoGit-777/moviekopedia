<script setup lang="ts">
  defineProps<{
    list: {
      label: string
      value: string
    }[]
  }>()

  const selectedValue = defineModel<string>()
</script>
<template>
  <div class="flex items-center divide-x divide-primary">
    <button
      v-for="item in list"
      :key="item.value"
      class="btn-toogle font-medium"
      :class="item.value == selectedValue ? 'btn-toogle-on' : 'btn-toogle-off'"
      @click="selectedValue = item.value"
    >
      <slot :name="'button' + item.label">{{ item.label }}</slot>
    </button>
  </div>
</template>
<style lang="postcss" scoped>
  .btn-toogle {
    @apply px-16 py-4;
  }
  .btn-toogle:first-of-type {
    @apply rounded-l-7;
  }
  .btn-toogle:last-of-type {
    @apply rounded-r-7;
  }
  .btn-toogle-on {
    @apply text-yellow-400 bg-primary;
  }
  .btn-toogle-off {
    @apply bg-white text-primary;
  }
</style>
