<script setup lang="ts">
  import { onMounted } from 'vue'
  import iconSpinner from '@/components/icon/icon-spinner.vue'
  import { useMovieModel } from '@/models/movie'
  import { useLanguageStore } from '@/stores/language'

  const { isLoaded, isFetching, movie, viewData } = useMovieModel()
  const lang = useLanguageStore()

  onMounted(() => {
    viewData()
  })
</script>
<template>
  <div class="h-full bg-gray-50 pt-80">
    <div class="h-full px-96 py-32">
      <template v-if="isFetching">
        <div class="w-full flex justify-center items-center h-360">
          <iconSpinner class="animate-spin" />
        </div>
      </template>
      <template v-if="isLoaded">
        <div class="bg-white w-full p-16">
          <div class="flex space-x-32">
            <div class="w-192 space-y-32 flex-none">
              <img
                v-lazy="movie?.poster"
                class="w-192"
              />
            </div>
            <div class="w-full space-y-16">
              <div class="text-32 font-bold">{{ movie?.title }}</div>
              <div class="space-y-8">
                <div class="font-medium">
                  {{ lang.getViewText('detail', 'description') }} :
                </div>
                <div>{{ movie?.plot }}</div>
              </div>
              <div class="flex space-x-16">
                <div class="w-3/4">
                  <div>
                    <span class="font-medium">
                      {{ lang.getViewText('detail', 'actors') }} :
                    </span>
                    {{ movie?.actors }}
                  </div>
                  <div>
                    <span class="font-medium">
                      {{ lang.getViewText('detail', 'director') }} :
                    </span>
                    {{ movie?.director }}
                  </div>
                  <div>
                    <span class="font-medium">
                      {{ lang.getViewText('detail', 'writer') }} :
                    </span>
                    {{ movie?.writer }}
                  </div>
                </div>
                <div class="w-1/4">
                  <div>
                    <span class="font-medium">
                      {{ lang.getViewText('detail', 'genre') }} :
                    </span>
                    {{ movie?.genre }}
                  </div>
                  <div>
                    <span class="font-medium">
                      {{ lang.getViewText('detail', 'year') }} :
                    </span>
                    {{ movie?.year }}
                  </div>
                  <div>
                    <span class="font-medium">
                      {{ lang.getViewText('detail', 'language') }} :
                    </span>
                    {{ movie?.language }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
