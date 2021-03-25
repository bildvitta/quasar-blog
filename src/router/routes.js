
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PostsList', component: () => import('src/pages/posts/PostsList.vue') },
      { path: 'posts/new', name: 'PostsCreate', component: () => import('src/pages/posts/PostsCreate.vue') },
      { path: 'posts/:id/edit', name: 'PostsEdit', component: () => import('src/pages/posts/PostsEdit.vue') },
      { path: 'authors', name: 'AuthorsList', component: () => import('src/pages/authors/AuthorsList.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
