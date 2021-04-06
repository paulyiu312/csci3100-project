import Vue from 'vue'
import LoginPage from './LoginPage.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(LoginPage)
}).$mount('#app')