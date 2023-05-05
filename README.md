# XXXCheng XXXXXXX engineering management 基于Shanghai kejian engineering management前端项目重构升级
> XXXXXXXXX有限公司企业官网 前端    

### 已经完成作者提供的KeJian.Core.Api后端对接 后续计划：1.计划升级Vue3 2.适配移动端

## 在这里的改进
1. 已经更新到vue2尽可能新的依赖版本，并解决了依赖问题。

感谢原作者feng的无私分享

## 新版本改进
1. 整体重构，结构升级为最新 vue-cli3
2. 代码优化，去除引用的静态js文件
3. 图片加载加入懒加载，整体性能提升很大
4. 视频采用 vue-video-player 处理兼容性
5. 首页全屏滚动样式由静态文件 fullpage.js 改为 vue-awesome-swiper
6. 样式调整，提升了自适应能力

## 组件列表
1. vue-router
2. element-ui
3. axios
4. vue-video-player (视频组件)
5. vue-awesome-swiper (首页滚动组件)
6. vue-lazyload (图片懒加载)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
