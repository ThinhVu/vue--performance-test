<script>
import Now from '@/SharedComponents/Now';
export default {
  components: {Now},
  setup() {
    return () => (
        <div>
          <div>
            <now/>
          </div>
          <div>JSX_Static</div>
        </div>
    )
  }
}
</script>
