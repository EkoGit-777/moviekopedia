<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import buttonComponent from '@/components/control/button-index.vue'
  import iconSearch from '@/components/icon/icon-search.vue'
  import inputBox from '@/components/input/input-index.vue'
  import { useLanguageStore } from '@/stores/language'

  const route = useRoute()
  const router = useRouter()
  const lang = useLanguageStore()
  defineProps({
    minimize: {
      type: Boolean,
      required: false,
    },
  })
  const search = ref(String(route.query.search ?? ''))

  const clickSearch = () => {
    if (search.value.length > 3) {
      router.push({
        name: 'search',
        params: { search: search.value },
      })
    }
  }
</script>
<template>
  <div class="w-full relative">
    <inputBox
      v-model="search"
      class="w-full border bg-white rounded-8 px-16 py-8"
      :class="[minimize ? 'text-12 h-36' : 'text-20 h-48']"
      :placeholder="lang.getViewText('placeholder', 'search')"
    />
    <buttonComponent
      class="absolute top-2 right-16"
      :class="[minimize ? 'text-16 h-36' : 'text-24 h-48']"
      @click="clickSearch"
    >
      <iconSearch />
    </buttonComponent>
  </div>
</template>
