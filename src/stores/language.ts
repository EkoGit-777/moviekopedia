import { defineStore } from 'pinia'

interface State {
  selected: string
  en: {[k: string]: {[k: string]: string}}
  id: {[k: string]: {[k: string]: string}}
}

export const useLanguageStore = defineStore('Language', {
  state: (): State => ({
    selected: 'en',
    en: {
      'dashboard': {
        'tagline': 'Moviekopedia - Movie and film catalogue'
      },
      'detail': {
        'description': 'Description',
        'actors': 'Actors',
        'director': 'Director',
        'writer': 'Writer',
        'genre': 'Genre',
        'year': 'Year',
        'language': 'Language'
      },
      'error': {
          '404': 'The page you are looking for is not found',
          'connection': 'There is something wrong on your connection',
          'server': 'There is something wrong on server',
          'empty': 'Unfortunately, no results were found using current keyword',
          'favorite': "You don't have any favorite movie yet",
      },
      'placeholder': {
        'search': 'Search Movies and TV Series, more.... (enter min. 3 characters)',
        'type': 'Choose Type',
        'year': 'Choose Year',
        'favorite': 'Favorite',
      }
    },
    id: {
      'dashboard': {
        'tagline': 'Moviekopedia - Katalog film dan drama seri'
      },
      'detail': {
        'description': 'Deskripsi',
        'actors': 'Pemain',
        'director': 'Direktur',
        'writer': 'Penulis',
        'genre': 'Kategori',
        'year': 'Tahun',
        'language': 'Bahasa',
      },
      'error': {
        '404': 'Halaman yang anda inginkan tidak ditemukan',
        'connection': 'Terdapat gangguan pada koneksi ke server',
        'server': 'Terdapat kesalahan pada server',
        'empty': 'Sayangnya, tidak ditemukan hasil pencarian menggunakan kata kunci tersebut',
        'favorite': 'Anda belum memiliki film favorit',
      },
      'placeholder': {
          'search': 'Cari Film dan Serial TV, dan lainnya.... (masukkan min. 3 huruf)',
          'type': 'Pilih Tipe',
          'year': 'Pilih Tahun',
          'favorite': 'Favorit',
      }
    },
  }),
  getters: {
    getViewText: (state) => (path: string, key: string) => {
      return state.selected == 'en' ? state.en[path][key] : state.id[path][key]
    },
  },
  actions: {
    setLang(lang: string) {
      this.selected = lang
    },
  },
})