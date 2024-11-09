<script setup lang="ts">
  import { useInfiniteScroll } from '@vueuse/core'
  import { onMounted, ref } from 'vue'
  import iconSpinner from '@/components/icon/icon-spinner.vue'
  import iconVideoSlash from '@/components/icon/icon-video-slash.vue'
  import { useMovieModel } from '@/models/movie'
  import { useLanguageStore } from '@/stores/language'
  import cardComponent from './card-component.vue'

  const lang = useLanguageStore()
  const el = ref(null)
  const {
    movies,
    isFetching,
    isLoaded,
    page,
    currentPage,
    totalData,
    totalPage,
    getData,
  } = useMovieModel()

  useInfiniteScroll(
    el,
    () => {
      if (page.value == currentPage.value && Number(page.value) < totalPage.value) {
        page.value = Number(page.value) + 1
        getData()
      }
    },
    { distance: 10 },
  )

  onMounted(() => {
    getData()
  })
</script>
<template>
  <div
    ref="el"
    class="h-screen overflow-y-auto bg-gray-50 pt-80"
  >
    <div class="h-full px-48 py-16 space-y-16">
      <template v-if="isLoaded">
        <template v-if="totalData > 0">
          <div class="grid gap-8 lg:grid-cols-10 sm:grid-cols-5 grid-cols-2 w-full pb-48">
            <template
              v-for="movie in movies"
              :key="movie.imdb_id"
            >
              <router-link :to="{ name: 'detail', params: { imdb_id: movie.imdb_id } }">
                <cardComponent :movie="movie" />
              </router-link>
            </template>
          </div>
        </template>
        <template v-else>
          <div
            class="flex flex-col items-center justify-center w-full text-red-500 h-360"
          >
            <iconVideoSlash />
            <div class="p-32 text-36 font-medium">
              {{ lang.getViewText('error', 'empty') }}
            </div>
          </div>
        </template>
      </template>
      <template v-if="isFetching">
        <div
          class="w-full flex justify-center items-center"
          :class="totalData > 0 ? 'h-fit' : 'h-360'"
        >
          <iconSpinner class="animate-spin" />
        </div>
      </template>
    </div>
  </div>
</template>
