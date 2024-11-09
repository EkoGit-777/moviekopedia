<script setup lang="ts">
  import { ref, watch } from 'vue'
  import buttonSwitchGroup from '@/components/control/button-switch-group.vue'
  import { useLanguageStore } from '@/stores/language'

  const lang = useLanguageStore()
  const selectedLang = ref('en')
  const languageList = ref([
    {
      label: 'EN',
      value: 'en',
    },
    {
      label: 'ID',
      value: 'id',
    },
  ])

  watch(selectedLang, () => {
    lang.setLang(selectedLang.value)
  })
</script>
<template>
  <div
    class="w-full fixed inset-x-0 z-20 bg-blue-950 h-80 px-20 py-8 flex space-x-84 items-center"
  >
    <router-link :to="{ name: 'dashboard' }">
      <img
        class="w-280"
        src="/images/logo.png"
        alt="Logo"
      />
    </router-link>
    <div class="w-full flex justify-center"></div>
    <div class="flex space-x-8">
      <button-switch-group
        v-model="selectedLang"
        :list="languageList"
      />
    </div>
  </div>
</template>
