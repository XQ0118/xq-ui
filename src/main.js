import Vue from 'vue'
import App from './App.vue'
import XUI from '../src/components/index'

Vue.config.productionTip = false

Vue.use(XUI)


new Vue({
  render: h => h(App),
}).$mount('#app')
