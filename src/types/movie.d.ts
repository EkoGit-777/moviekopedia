interface MovieType {
  imdb_id: string
  title: string
  poster: string
  favorited: boolean
}

interface MovieDetailType extends MovieType {
  plot: string
  actors: string
  director: string
  writer: string
  genre: string
  language: string
  year: string
}

interface MovieListType {
  list: MovieType[]
  total: number
  page: number
  total_page: number
}