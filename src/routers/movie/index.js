export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'Search',
      component: () => import('@/components/Search')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: '/movie',
      redirect: '/movie/nowPlaying'
    }
  ]
}
