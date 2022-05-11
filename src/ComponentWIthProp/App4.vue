<script>
// - contain dynamic part included in component
// - contain event handle withActionLogs (pre-defined function)
import MyButton from '@/SharedComponents/MyButton';
import withActionLogs from './withActionLogs';
import Now from '@/SharedComponents/Now';

export default {
  components: {MyButton, Now},
  props: {},
  setup() {
    const onXXX = withActionLogs(() => console.log('handle button click'))
    return () => <div>
      <div>Static</div>
      <div>
        <now/>
      </div>
      <my-button text="Click me" onMyBtnClicked={onXXX}/>
    </div>
  }
}
</script>
