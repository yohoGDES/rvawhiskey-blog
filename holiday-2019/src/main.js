import lodash from 'lodash'
import Vue from 'vue'
import Multiselect from 'vue-multiselect'
import App from './App.vue'
import util from './helpers/utilities.vue'
import store from './store'

Vue.component(Multiselect)

// Init Lodash in Vue
Object.defineProperty(Vue.prototype, '$lodash', {
	value: lodash
})
// Call Lodash in components like so: console.log(this.$lodash.isEmpty(null));
Object.defineProperty(Vue.prototype, '$util', { value: util })

Vue.config.productionTip = false

new Vue({
	store,
	util,
	render: h => h(App)
}).$mount('#app')
