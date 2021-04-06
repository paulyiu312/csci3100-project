import Vue from 'vue'
import MainMenu from './MainMenu.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(MainMenu)
}).$mount('#app')