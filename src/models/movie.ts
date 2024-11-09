import { ref } from 'vue';
import { useApi } from "@/functions/api";
import { useRoute } from 'vue-router';

export function useMovieModel () {
  const api = useApi()
  const route = useRoute()
  const isFetching = ref<boolean>(false)
  const isLoaded = ref<boolean>(false)
  const movie = ref<MovieDetailType>()
  const movies = ref<MovieType[]>([])
  const page = ref<number|undefined>(undefined)
  const currentPage = ref<number|undefined>(undefined)
  const totalData = ref<number>(0)
  const totalPage = ref<number>(0)

  const getData = async () => {
    isFetching.value = true
    let search = String(route.params.search)
    try {
      const response = await api.GET<MovieListType>('movi/movie', { search: search, page: page.value })
      movies.value = [...movies.value, ...response.list]
      totalData.value = response.total
      page.value = response.page
      currentPage.value = response.page
      totalPage.value = response.total_page
      isLoaded.value = true
    } finally {
      isFetching.value = false
    }
  }

  const viewData = async () => {
    isFetching.value = true
    let imdbId = String(route.params.imdb_id)
    try {
      const response = await api.GET<MovieDetailType>('movi/movie/' + imdbId)
      movie.value = response
      isLoaded.value = true
    } finally {
      isFetching.value = false
    }
  } 

  return {
    isFetching,
    isLoaded,
    movie,
    movies,
    page,
    currentPage,
    totalData,
    totalPage,
    getData,
    viewData
  }
}