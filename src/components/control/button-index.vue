<script setup lang="ts">
  import { type ButtonHTMLAttributes } from 'vue'

  interface Props {
    loading?: boolean
    disabled?: boolean
    type?: ButtonHTMLAttributes['type']
  }
  withDefaults(defineProps<Props>(), {
    disabled: false,
    loading: false,
    type: 'button',
  })
</script>
<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="focus:outline-none"
  >
    <slot></slot>
    <span
      v-if="loading"
      class="dot absolute"
    ></span>
  </button>
</template>

<style lang="postcss" scoped>
  .dot:after {
    animation: dotty steps(1, end) 1s infinite;
    content: '';
  }
</style>
<style>
  @keyframes dotty {
    0% {
      content: '';
    }

    25% {
      content: '.';
    }

    50% {
      content: '..';
    }

    75% {
      content: '...';
    }

    100% {
      content: '';
    }
  }
</style>
