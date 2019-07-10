import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueDragResize from 'vue-drag-resize'
import store from './store';

Vue.config.productionTip = false
Vue.component('vue-drag-resize', VueDragResize)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
