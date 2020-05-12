export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Tag.vue")
  },
  {
    path: "/docs/why-we-work/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--why-we-work-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/why-we-work.md")
    }
  },
  {
    path: "/docs/skills-matrix/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--skills-matrix-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/skills-matrix.md")
    }
  },
  {
    path: "/docs/how-we-work/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--how-we-work-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/how-we-work.md")
    }
  },
  {
    path: "/docs/government-experience/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--government-experience-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/government-experience.md")
    }
  },
  {
    path: "/docs/digital-tech-portfolio/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--digital-tech-portfolio-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/digital-tech-portfolio.md")
    }
  },
  {
    path: "/docs/about-forms/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--about-forms-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/about-forms.md")
    }
  },
  {
    path: "/docs/about-migrations/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--about-migrations-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/about-migrations.md")
    }
  },
  {
    path: "/docs/accessibility-manifesto/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--accessibility-manifesto-md" */ "/Users/nattkins/Documents/github/Bravo2/docs/accessibility-manifesto.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/Blog.vue")
  },
  {
    path: "/planner-saved-my-life/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
  },
  {
    path: "/nintex-bad-ugly/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/pages/Docs.vue")
  },
  {
    path: "/branding-now/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
  },
  {
    path: "/Teams-usability-how-accessible/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nattkins/Documents/github/Bravo2/src/templates/Post.vue")
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

