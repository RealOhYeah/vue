<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件 {{ nowTitle }}
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就多练习',
      nowTitle: ''
    }
  },
  methods: {
    //3.提供处理函数，提供逻辑
    handleChange(newTitle){
      this.nowTitle = newTitle
    }
  },
  components: {
    Son
  },
}
</script>

<style></style>