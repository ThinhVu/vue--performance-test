<script>
import {nextTick, ref} from 'vue';
import useNow from '@/SharedComponents/useNow';

const ViaProp = {
  props: ['value'],
  setup(props) {
    return () => props.value
  }
}
export default {
  components: {ViaProp},
  setup() {
    const now = useNow()
    return () => (
        <div>
          <div>
            <via-prop value={now.value}/>
          </div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
