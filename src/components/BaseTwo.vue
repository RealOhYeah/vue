<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>

  </div>
</template>

<script>
export default {
  data() {
    console.log('Hello World');
    return {
      count: 100
    }
  }
}
</script>

<style scoped>
.base-count {
  margin: 20px;
}
</style>