import Vue from 'vue'
import App from './App.vue'


// 路由的使用步骤 5 + 2
// 5个基础步骤
// 1. 下载 v3.6.5
// yarn add vue-router@3.6.5
// 2. 引入
// 3. 安装注册 Vue.use(Vue插件)
// 4. 创建路由对象
// 5. 注入到new Vue中，建立关联

import Find from './views/Find.vue';
import My from './views/My.vue';
import Friend from './views/Friend.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
   routes : [
     {  path: '/find', component: Find},
     {  path: '/my', component: My},
     {  path: '/friend', component: Friend},  
   ]
});
 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')