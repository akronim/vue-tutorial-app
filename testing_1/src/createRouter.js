import Vue from 'vue'
import VueRouter from 'vue-router'

/*
[vue-test-utils]: could not overwrite property $route, this is usually caused by a plugin that has added the property as a read-only value
[vue-test-utils]: could not overwrite property $router, this is usually caused by a plugin that has added the property as a read-only value
*/
if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter)
}

const createRouter = () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: []
  })
}

export { createRouter }
