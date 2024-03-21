<template>
  <!-- 主体区域 -->
  <section id="app">

    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :total=list.length @clearAll="handleClearAll" ></TodoFooter>

  </section>
</template>

<script>
import TodoFooter  from './components/TodoFooter.vue'
import TodoHeader  from './components/TodoHeader.vue'
import TodoMain  from './components/TodoMain.vue'
 
// 渲染功能：
// 1.提供数据： 提供在公共的父组件 App.vue
// 2.通过父传子，将数据传递给TodoMain
// 3.利用 v-for渲染

const fruitLocal = JSON.parse(localStorage.getItem('list')) 
const defaultArr =  [
        { id: 1 , name: '吃饭'},
        { id: 2 , name: '逛街'},
        { id: 3 , name: '看电影'}  
      ]

export default {

  data () {
    return {
      
      list:   ( !fruitLocal || fruitLocal.length === 0) ? defaultArr : fruitLocal,
    
    }
  },
  components: {
    TodoFooter ,TodoMain ,TodoHeader 
  },

  watch: {
     list: {
      deep: true,
      handler (newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
     }
  },
  methods: {
    handleAdd(todoName){


      this.list.push(
        {
          id: +new Date(),
          name: todoName
      }
      )
    },
    handleDel(index){
      this.list.splice(index,1)
    },
    handleClearAll(){
        this.list = [];
    }


  }
}
</script>

<style>

</style>
