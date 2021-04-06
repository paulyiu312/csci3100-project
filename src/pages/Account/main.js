import Vue from 'vue'
import Account from './Account.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Account)
}).$mount('#app')