<script>
// - contain dynamic part (now)
// - contain event handle withActionLogs (look like invoke immediately)
import MyButton from '@/SharedComponents/MyButton';
import useNow from '@/SharedComponents/useNow';
import withActionLogs from './withActionLogs';

export default {
  components: {MyButton},
  props: {},
  setup() {
    const now = useNow()
    return () => <div>
      <div>Static</div>
      <div>{now.value}</div>
      <my-button text="Click me" onMyBtnClicked={withActionLogs(() => console.log('handle button click'))}/>
    </div>
  }
}
</script>
