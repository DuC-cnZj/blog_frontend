import Vue from 'vue'
import Router from 'vue-router'

const PostHome = () => import('@views/PostHome')
const BlogHome = () => import('@views/BlogHome')
const BlogContent = () => import('@views/BlogContent')
const PostContent = () => import('@views/PostContent')
const CategoryContent = () => import('@views/CategoryContent')
const CategoryHome = () => import('@views/CategoryHome')
const ArticleContent = () => import('@views/ArticleContent')
const ArticleHome = () => import('@views/ArticleHome')
const NotFound = () => import('@views/NotFound')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        home: BlogHome,
        content: BlogContent
      }
    },
    {
      path: '/articles/:id',
      name: 'showarticle',
      components: {
        home: PostHome,
        content: PostContent
      },
      beforeEnter: (to, from, next) => {
        if (Object.is(Number(to.params.id), NaN)) {
          window.toastr.error('非法路由地址')
          next({ path: '/' })
        } else {
          next()
        }
      }
    },
    {
      path: '/categories',
      components: {
        home: CategoryHome,
        content: CategoryContent
      }
    },
    {
      path: '/articles',
      components: {
        home: ArticleHome,
        content: ArticleContent
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      components: {
        home: CategoryHome,
        content: NotFound
      }
    }
  ]
})
