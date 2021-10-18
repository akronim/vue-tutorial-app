import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import { bustCache } from '@/bust-cache.js'

/*
[vue-test-utils]: could not overwrite property $route, this is usually caused by a plugin that has added the property as a read-only value
[vue-test-utils]: could not overwrite property $router, this is usually caused by a plugin that has added the property as a read-only value
*/
if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter)
}

const router = new VueRouter({ routes })

export function routerBeforeEach (to, from, next) {
  if (to.matched.some((record) => record.meta.shouldBustCache)) {
    bustCache()
  }
  next()
}

router.beforeEach((to, from, next) => routerBeforeEach(to, from, next))

export default router
