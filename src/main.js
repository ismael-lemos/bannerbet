import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import store from './store'
import VueCroppie from 'vue-croppie';
import 'croppie/croppie.css'
import { VueMaskDirective } from 'v-mask'

Vue.config.productionTip = false
Vue.use(VueCroppie)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.directive('mask', VueMaskDirective)
