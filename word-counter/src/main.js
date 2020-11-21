import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routes from './routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
