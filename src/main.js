import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/iconfont.css'
import '../src/assets/css/fontello.css'

// url格式化
import querystring from 'querystring'
Vue.prototype.$qs = querystring
// 配置axios默认项
Axios.defaults.withCredentials = true //携带cookie
// Axios.defaults.baseURL = 'http://218.94.143.226:8016/omm' //baseURL
Axios.defaults.method = 'post'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//注册axips
Vue.prototype.$http = Axios
//注册ElementUI
Vue.use(ElementUI)

Vue.config.productionTip = false

// 定义全局过滤器
// 时间格式化
Vue.filter('dateformat',function (timestamp) {
    if( timestamp ) {
      var date = new Date(timestamp * 1000);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
          return Y+M+D
    }
   
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
