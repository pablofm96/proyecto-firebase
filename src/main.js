import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import Notifications from 'vue-notification'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'




library.add(faFontAwesome)

library.add(fas)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Notifications)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

//Componentes
// import Cabecera from './components/cabecera.vue'
// Vue.component(Cabecera)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
