<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useApi } from '@/functions/api'

  const api = useApi()
  const router = useRouter()

  const init = async () => {
    const response = await api.POST('auth/check')
    // if (response.data.authenticated) {
    //   router.replace({ name: 'dashboard' })
    // }
  }
  onMounted(() => {
    init()
  })
</script>
<template>
  <div class="from-blue-900 to-blue-700 bg-gradient-to-bl">
    <router-view />
  </div>
</template>
