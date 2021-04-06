import Vue from 'vue'
import LeaderBoard from './LeaderBoard.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(LeaderBoard)
}).$mount('#app')