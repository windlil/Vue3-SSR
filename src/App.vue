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
      Hello App
    </div>
    <div>count:{{ count }}</div>
    <button @click="countAdd">+1</button>
    <div>
      <router-link to="/">
        <button>home</button>
      </router-link>
      <router-link to="/about">
        <button>about</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>