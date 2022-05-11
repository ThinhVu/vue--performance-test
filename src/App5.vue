<script>
import {nextTick, ref} from 'vue';

const PassThrough = {
  setup(__, {slots}) { return slots.default }
}
export default {
  components: {PassThrough},
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
    return () => (
        <div>
          <div>
            <pass-through>{counter.value}</pass-through>
          </div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
