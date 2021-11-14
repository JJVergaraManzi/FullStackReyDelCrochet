import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacto from '../views/Contacto.vue'
import Tienda from '../views/Tienda.vue'
import Register from '../views/Register.vue'
import Forgottenpassword from '../views/Forgottenpassword.vue'
import Home from '../views/Home.vue'
import Carritojaja from '../views/Carritojaja.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import Agujas from '../views/Agujas.vue'
import Accesorios from '../views/Accesorios.vue'
import Crochet from '../views/Crochet.vue'
import Lanas from '../views/Lanas.vue'
import LanasBaby from '../views/LanasBaby.vue'
import Palillos from '../views/Palillos.vue'
import Tijeras from '../views/Tijeras.vue'
import Trapillo from '../views/Trapillo.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
//import Homedos from '../views/Homedos.vue'
import Users from '../views/Users.vue'
import Visita from '../views/Visita.vue'
import AgregarProd from '../views/AgregarProd.vue'

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);

Vue.use(VueAxios, axios);
Vue.use(VueRouter)

const routes = [
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/AgregarProd',
    name: 'AgregarProd',
    component: AgregarProd
  },
  {
    path: '/Visita',
    name: 'Visita',
    component: Visita
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: Tienda
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/carritojaja',
    name: 'carritojaja',
    component: Carritojaja
  },
  {
    path: '/agujas',
    name: 'agujas',
    component: Agujas
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: Accesorios
  },
  {
    path: '/crochet',
    name: 'crochet',
    component: Crochet
  },
  {
    path: '/lanas',
    name: 'Lanas',
    component: Lanas
  },
  {
    path: '/lanasbaby',
    name: 'lanasbaby',
    component: LanasBaby
  },
  {
    path: '/palillos',
    name: 'palillos',
    component: Palillos
  },
  {
    path: '/tijeras',
    name: 'tijeras',
    component: Tijeras
  },
  {
    path: '/trapillo',
    name: 'trapillo',
    component: Trapillo
  },{
    path: '/Login',
    name: 'Login',
    component: Login
  },{
    path: '/forgottenpassword',
    name: 'Forgottenpassword',
    component: Forgottenpassword
  },{
    path: '/register',
    name: 'Register',
    component: Register
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
