import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import store from '../store';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('../views/Profile.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('../views/BoardAdmin.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('../views/BoardModerator.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('../views/BoardUser.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (to.meta.requiresAuth && !loggedIn) {
    store.dispatch('auth/logout');
    next('/login');
  } else {
    next();
  }
});
