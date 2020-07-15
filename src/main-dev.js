import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//挂载路由导航守卫
import "./router/premit"
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
//引入自定义图标组件
import "./icons"

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
