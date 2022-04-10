import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

let kejianrouter = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Vue.defineAsyncComponent(() => import('./views/Home.vue')),
    },
    {
      path: '/news',
      name: 'news',
      component: Vue.defineAsyncComponent(() => import('./views/News.vue')),
    },
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: Vue.defineAsyncComponent(
        () => import('./views/NewsDetails.vue')
      ),
    },
    {
      path: '/product',
      name: 'product',
      component: Vue.defineAsyncComponent(() => import('./views/Product.vue')),
    },
    {
      path: '/case',
      name: 'case',
      component: Vue.defineAsyncComponent(() => import('./views/Case.vue')),
    },
    {
      path: '/casedetails/:id',
      name: 'casedetails',
      component: Vue.defineAsyncComponent(
        () => import('./views/CaseDetails.vue')
      ),
    },
    {
      path: '/goin',
      name: 'goin',
      component: Vue.defineAsyncComponent(() => import('./views/GoIn.vue')),
    },
    {
      path: '/download',
      name: 'download',
      component: Vue.defineAsyncComponent(() => import('./views/Download.vue')),
    },
    {
      path: '/login',
      name: 'login',
      component: Vue.defineAsyncComponent(() => import('./views/Login.vue')),
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: true,
      },
      component: Vue.defineAsyncComponent(() => import('./views/Admin.vue')),
      children: [
        {
          path: '/admin/user',
          name: 'user',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/User.vue')
          ),
        },
        {
          path: '/admin/news',
          name: 'new',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/News.vue')
          ),
        },
        {
          path: '/admin/cases',
          name: 'cases',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Cases.vue')
          ),
        },
        {
          path: '/admin/team',
          name: 'team',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Team.vue')
          ),
        },
        {
          path: '/admin/course',
          name: 'course',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Course.vue')
          ),
        },
        {
          path: '/admin/enterprise',
          name: 'enterprise',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Enterprise.vue')
          ),
        },
        {
          path: '/admin/honor',
          name: 'honor',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Honor.vue')
          ),
        },
        {
          path: '/admin/dictionary',
          name: 'dictionary',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Dictionary.vue')
          ),
        },
        {
          path: '/admin/page',
          name: 'page',
          component: Vue.defineAsyncComponent(
            () => import('./views/Admin/Page.vue')
          ),
        },
      ],
    },
  ],
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some((res) => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
    }
  } else {
    next()
  }
})

export default kejianrouter
