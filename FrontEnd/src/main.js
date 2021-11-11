import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft, faSearch, faBookmark, faShare, faClock, faCheck, faUserCircle, faTrash, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


library.add(faArrowRight, faArrowLeft, faSearch, faBookmark, faShare, faClock, faCheck, faUserCircle, faTrash, faBars, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
