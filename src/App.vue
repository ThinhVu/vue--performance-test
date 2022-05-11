<template>
  <div>
    <div>{{counter}}</div>
    <div>Static</div>
  </div>
</template>

<script setup>
import {ref, nextTick} from 'vue';
const counter = ref(0)
setInterval(() => {
  counter.value++
  nextTick(() => {
    console.clear()
    console.log('_createVNode', window._createVNodeCtr)
    console.log('cloneVNode', window.cloneVNodeCtr)
  })
}, 1000)
</script>
