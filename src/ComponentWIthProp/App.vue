<template>
  <div>
    <div>Static</div>
    <div>{{now}}</div>
    <MyButton text="Click me" @my-btn-clicked="withActionLogs(() => console.log('handle button click'))"/>
  </div>
</template>
<script setup>
// using template:
// - contain dynamic part (now)
// - contain event handle withActionLogs (look like invoke immediately)
import MyButton from '@/SharedComponents/MyButton';
import useNow from '@/SharedComponents/useNow';
import withActionLogs from '@/ComponentWIthProp/withActionLogs';
const now = useNow();
</script>
