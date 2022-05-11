<script>
import {nextTick, ref} from 'vue';

const Counter = {
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
    return () => counter.value
  }
}
export default {
  components: {Counter},
  setup() {
    return () => (
        <div>
          <div>
            <counter/>
          </div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
