import NestedRoute from '@/components/NestedRoute.vue'
import FooRoute from '@/components/FooRoute.vue'
import BarRoute from '@/components/BarRoute.vue'
import Home from '@/components/Home'

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/nested-route',
    component: NestedRoute,
    meta: {
      shouldBustCache: true
    }
  },
  { path: '/foo/:username', name: 'foo', component: FooRoute },
  { path: '/bar', component: BarRoute }
]
