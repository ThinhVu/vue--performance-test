<script>
import useNow from '@/SharedComponents/useNow';
export default {
  name: 'Counter',
  setup() {
    const now = useNow()
    return () => now.value
  }
}
</script>
