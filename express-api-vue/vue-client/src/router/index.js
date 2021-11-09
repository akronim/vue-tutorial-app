import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    // lazy-loaded
    component: () => import('../views/BoardAdmin.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: '/mod',
    name: 'moderator',
    // lazy-loaded
    component: () => import('../views/BoardModerator.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_MODERATOR']
    }
  },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: () => import('../views/BoardUser.vue'),
    meta: {
      requiresAuth: true,
      roles: ['ROLE_USER']
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')

  // trying to access a restricted page + not logged in
  // redirect to login page
  const notAuthenticated = to.meta.requiresAuth && !user

  const authorized = isAuthorized(JSON.parse(user), to)

  if (notAuthenticated || !authorized) {
    store.dispatch('auth/logout')
    next('/login')
  } else {
    next()
  }
})

const isAuthorized = (user, to) => {
  if (!to.meta.roles) {
    return true
  }

  if (to.meta.roles.length === 0) {
    return true
  }

  if (!user.roles || user.roles.length === 0) {
    return false
  }

  if (user.roles.includes('ROLE_ADMIN')) {
    return true
  }

  if (user.roles.includes('ROLE_MODERATOR') && to.meta.roles.includes('ROLE_USER')) {
    return true
  }

  let authorized = true
  to.meta.roles.forEach((v, i, a) => {
    if (!user.roles.includes(v)) {
      authorized = false
    }
  })

  return authorized
}

export default router
