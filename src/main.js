import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style.scss'
import '@popperjs/core'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faChartSimple, faGears, faCircleUser, faUsers, faClockFour, faMoneyBill, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



library.add(faChartSimple)
library.add(faCircleUser)
library.add(faGears)
library.add(faUsers)
library.add(faClockFour)
library.add(faMoneyBill)
library.add(faBars)
library.add(faXmark)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
