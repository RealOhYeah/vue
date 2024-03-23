<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus  ref="inp" type="text">
  </div>
</template>

<script>
export default {
  //传统方法
  // mounted(){
  //   this.$refs.inp.focus()
  // }

  directives: {
    focus:{
      inserted(el){
        el.focus()
      }
    }
  }
 
}
</script>

<style>

</style>