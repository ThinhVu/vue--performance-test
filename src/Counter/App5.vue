<script>
import useNow from '@/SharedComponents/useNow';

const PassThrough = {
  setup(__, {slots}) { return slots.default }
}
export default {
  components: {PassThrough},
  setup() {
    const now = useNow()
    return () => (
        <div>
          <div>
            <pass-through>{now.value}</pass-through>
          </div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
