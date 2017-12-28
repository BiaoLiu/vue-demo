// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ComponentA from './components/a'
import router from './router'

Vue.config.productionTip = false

//全局组件
Vue.component('my-header',{
  template:"<p>this is my header {{ word }}</p>",
  data:{
    word:'hello world'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',  //实例选项
  // router,
  template: '<ComponentA/>',
  components: { ComponentA }
  // template:'<p>模板加载位置</p>'
})
