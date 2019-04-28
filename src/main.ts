import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'
import axios from 'axios'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/style-flex.css'
import './assets/css/animate.css'
import './assets/css/landing.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VueToastr from '@deveodk/vue-toastr'
import VuePlaceAutocomplete from 'vue-place-autocomplete/dist/VuePlaceAutocomplete.umd.js'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
Vue.config.productionTip = true
// Vue.use(VueGmaps, {
//   key: 'AIzaSyAL98Xl6IHlR9sTIgkFCn11rAijLPmDCVM'
// })
Vue.use(VuePlaceAutocomplete);
Vue.use(VueSweetalert2)
export const EventBus = new Vue()
Vue.use(BootstrapVue)
Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultType: 'info',
  defaultTimeout: 5000
})

Vue.filter('formatDate', function (value: any) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY hh:mm')
  }
})

Vue.prototype.$http = axios
const token = window.localStorage.getItem('loginToken')
if (token) {
  Vue.prototype.$http.defaults.headers.common['x-auth-token'] = token
}
axios.interceptors.response.use((response) => {
  console.log('Response:',response)
  return response;
}, (error)=>{
  console.log('Error:',error)
  return Promise.reject(error)
})
// Vue.prototype.interceptors.response.use(response => { // intercept the global error
//   return response
// }, function (error:any) {
//   let originalRequest = error.config
//   if (error.response.status === 401) { // if the error is 401 and hasent already been retried
//     console.log('working')
//     window.location.href = '/login'
//   }
//   if (error.response.status === 404) {
//     //originalRequest._retry = true
//     window.location.href = '/'
//     return
//   }
//   // Do something with response error
//   return Promise.reject(error)
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
