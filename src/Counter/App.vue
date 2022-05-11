<template>
  <div>
    <div>{{now}}</div>
    <div>Static</div>
  </div>
</template>

<script setup>
import useNow from '@/SharedComponents/useNow';
const now = useNow()
</script>
