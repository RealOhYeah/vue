<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input 
    v-model="todoName" 
    @keyup.enter = "handleAdd"
    placeholder="请输入任务" class="new-todo" />
    <button class="add" @click="handleAdd" >添加任务</button>
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName:''
    }
  },
  methods: {
    handleAdd() {
         
      if (this.todoName.trim() === '') {
        alert('输入的值不能为空') 
        return;
      }  
     
      this.$emit('add', this.todoName);

      this.todoName = ''
     

    }, 
  },
  

}
</script>

<style></style>