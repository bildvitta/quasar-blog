
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PostsList', component: () => import('src/pages/posts/PostsList.vue') },
      { path: 'posts/new', name: 'PostsCreate', component: () => import('src/pages/posts/PostsForm.vue') },
      { path: 'posts/:id/edit', name: 'PostsEdit', component: () => import('src/pages/posts/PostsForm.vue') },
      { path: 'posts/:id', name: 'PostsSingle', component: () => import('src/pages/posts/PostsSingle.vue') },
      { path: 'authors', name: 'AuthorsList', component: () => import('src/pages/authors/AuthorsList.vue') },
      { path: 'authors/create', name: 'AuthorsCreate', component: () => import('src/pages/authors/AuthorsForm.vue') },
      { path: 'authors/:id/edit', name: 'AuthorsEdit', component: () => import('src/pages/authors/AuthorsForm.vue') }
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
