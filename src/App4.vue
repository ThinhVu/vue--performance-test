<script>
import {nextTick, ref} from 'vue';

const ViaProp = {
  props: ['value'],
  setup(props) {
    return () => props.value
  }
}
export default {
  components: {ViaProp},
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
            <via-prop value={counter.value}/>
          </div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
