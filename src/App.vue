<template>
  <div class="app">
    <button @click="isShow=true">退出按钮</button>
    <!-- isShow.sync  => :isShow="isShow" @update:isShow="isShow=$event" -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return { 
      isShow:true
    }
  },
  
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>