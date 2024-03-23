import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
 
  // Vue.directive('focus',  {
  //   // `bind`, `update`
  //   inserted(el){
  //     console.log(el);
  //     el.focus()
  //   }
  // });



new Vue({
  render: h => h(App),
}).$mount('#app')
