<script setup>
import { ref } from 'vue'

const count = ref(0)

function countAdd() {
  count.value++
}
</script>

<template>
  <div class="App">
    <div>
      Hello Home
    </div>
    <div>count:{{ count }}</div>
    <button @click="countAdd">+1</button>
  </div>
</template>