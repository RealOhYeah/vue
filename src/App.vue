<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件 {{ nowTitle }}
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <Son :title="myTitle" @changeTitle="handChange"></Son>
    <UserInfo
      :username="username"
      :age="age"
      :isSingle="isSingle" 
      :car="car.brand"
      :hobby="hobby"
    
    ></UserInfo>

    <br><br><br>

    <BaseProgress :w="count"></BaseProgress>

    <br><br><br>

    <BaseCount :count="count" @changeCount="handleChange"></BaseCount>


  </div>
</template>

<script>
import Son from './components/Son.vue'
import UserInfo from './components/UserInfo.vue';
import BaseProgress from './components/BaseProgress.vue'
import BaseCount from './components/BaseCount.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就多练习',
      nowTitle: '',

      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马'
      },
      hobby: ['篮球','足球','羽毛球'],

      // width: 30,
      count: 100
    }
  },
  methods: {
    //3.提供处理函数，提供逻辑
    handChange(newTitle){
      this.nowTitle = newTitle
    },
    handleChange(newCount){
      console.log(newCount);
      this.count = newCount
      this.width = this.count
    }

  },
  components: {
    Son,UserInfo,BaseProgress,BaseCount
  },
}
</script>

<style></style>