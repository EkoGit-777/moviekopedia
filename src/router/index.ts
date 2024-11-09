import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string,
  }
}
const routes = [
  {
    path: '/',
    component: () => import('../layouts/index-layout.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        meta: { title: 'Moviekopedia' },
        component: () => import('../views/movie/index-page.vue'),
      },
      {
        path: '/search',
        children: [
          {
            path: '',
            redirect: { name: 'dashboard' },
          },
          {
            path: ':search',
            name: 'search',
            meta: { title: 'Moviekopedia' },
            component: () => import('../views/movie/search-page.vue'),
          },

        ],
      },
      {
        path: '/detail',
        children: [
          {
            path: '',
            redirect: { name: 'dashboard' },
          },
          {
            path: ':imdb_id',
            name: 'detail',
            meta: { title: 'Moviekopedia' },
            component: () => import('../views/movie/detail-page.vue'),
          },
        ],
      },
      // {
      //   path: '/:pathMatch(.*)*',
      //   component: () => import('@/views/errors/NotFound.vue'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name == 'search'){
    document.title = 'Search result for ' + to.params.search
  }else if (to.meta.title != from.meta.title) {
    document.title = to.meta.title + ' - Search and mark your favorite movie'
  }
  next()
})

export default router
