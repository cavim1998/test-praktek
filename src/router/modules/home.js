const staticTitle = 'Test'

export default async () => {
  return [
    {
      path: '/',
      name: 'home',
      meta: {
        title: `${staticTitle} - Home`,
      },
      component: () =>
        import('@/views/firstHomepage.vue')
    }
  ]
}
