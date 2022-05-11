import {ref, nextTick} from 'vue'

export default function useNow() {
  const now = ref(new Date().getTime())
  setInterval(() => {
    now.value = new Date().getTime()
    nextTick(() => {
      // console.clear()
      console.log('_createVNode', window._createVNodeCtr)
      console.log('cloneVNode', window.cloneVNodeCtr)
    }).then()
  }, 1000);
  return now;
}
