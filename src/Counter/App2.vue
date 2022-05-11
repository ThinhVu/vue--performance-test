<script>
import useNow from '@/SharedComponents/useNow';

export default {
  setup() {
    const now = useNow()
    return () => (
        <div>
          <div>{now.value}</div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
