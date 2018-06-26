// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
    this.$ajax.get('http://mock.bfe.360es.cn/mock/5b1de90a4e871971e001a4d5/example/visbase', {}).then(res => {
      console.log(res)
    })
  }
})
