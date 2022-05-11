<script>
// - contain dynamic part (now)
// contain event handle withActionLogs (pre-defined function)
import MyButton from '@/SharedComponents/MyButton';
import withActionLogs from './withActionLogs';
import useNow from '@/SharedComponents/useNow';

export default {
  components: {MyButton},
  props: {},
  setup() {
    const onXXX = withActionLogs(() => console.log('handle button click'))
    const now = useNow()
    return () => <div>
      <div>Static</div>
      <div>{now.value}</div>
      <my-button text="Click me" onXxx={onXXX}/>
    </div>
  }
}
</script>
