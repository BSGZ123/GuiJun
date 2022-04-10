import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
window.$vueApp = Vue.createApp(App)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
window.$vueApp.use(ElementUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
window.$vueApp.use(VueAwesomeSwiper)

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
window.$vueApp.use(VideoPlayer)

import VueLazyload from 'vue-lazyload'
window.$vueApp.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1,
})

//设置超时时间
axios.defaults.timeout = 5000
//设置api地址
//全局定义axios
axios.defaults.baseURL = 'http://shkjgw.shkjem.com/api/'
window.$vueApp.config.globalProperties.$http = axios

// 图片服务器地址
window.$vueApp.config.globalProperties.imgserver = 'http://shkjgw.shkjem.com/'

window.$vueApp.mount('#app')
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(router)
