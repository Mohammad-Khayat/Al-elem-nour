import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import bootstrapVue  from 'bootstrap-vue'
import './assets/style.scss'
import '@mdi/font/css/materialdesignicons.css'

import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faGlobe,
  faCompassDrafting,
  faStar,
  faBuilding,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faStore,
  faUsers,
  faBorderAll,
  faListUl,
  faCar,
  faGears,
  faPen,
  faTrash,
  faBookOpenReader,
  faMusic,
  faPuzzlePiece,
  faHeartPulse,
  faWifi
} from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faWifi,
  faHeartPulse,
  faGlobe,
  faMusic,
  faPuzzlePiece,
  faBookOpenReader,
  faCompassDrafting,
  faStar,
  faPen,
  faBuilding,
  faGears,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faUsers,
  faStore,
  faBorderAll,
  faListUl,
  faCar,
  faTrash
);

/* add font awesome icon component */
Vue.component("fa", FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(bootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// Import Bootstrap an BootstrapVue CSS files (order is important)

