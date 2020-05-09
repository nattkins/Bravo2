export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Tag.vue")
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/Blog.vue")
  },
  {
    path: "/what-i-ate-for-breakfast/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
  },
  {
    path: "/vue-vs-react-comparison/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
  },
  {
    path: "/nintex-good-bad-ugly/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/404.vue")
  }
]

