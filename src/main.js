import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './vuex/store'
import { sync } from 'vuex-router-sync'

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  // create router instance
  const router = createRouter();
  const store = createStore();

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return {
    app,
    router,
    store
  };
}