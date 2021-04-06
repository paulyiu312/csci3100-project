import Vue from 'vue'
import Friends from './Friends.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Friends)
}).$mount('#app')