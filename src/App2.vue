<script>
import {ref, nextTick} from 'vue';
export default {
  setup() {
    const counter = ref(0)
    setInterval(() => {
      counter.value++
      nextTick(() => {
        console.clear()
        console.log('_createVNode', window._createVNodeCtr)
        console.log('cloneVNode', window.cloneVNodeCtr)
      })
    }, 1000)
    return () => <div><div>{counter.value}</div><div>JSX_Static</div></div>
  }
}
</script>
