import App from './App'
import i18n from './i18n/index.js'
import {
	utils
} from '@/util/utils.js'
// console.log(utils)
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$utils = utils
App.mpType = 'app'
const app = new Vue({
	i18n
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n); // 使用 Vue I18n
	app.config.globalProperties.$utils = utils
	return {
		app
	}
}
// #endif