// router.js
import Vue from 'vue';
import Router from 'vue-router';

import Landing from './Landing/index.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Landing
      }
    ]
  });
}