<script>
// - contain dynamic part included in component
// - contain event handle withActionLogs (look like invoke immediately)
import MyButton from '@/SharedComponents/MyButton';
import withActionLogs from './withActionLogs';
import Now from '@/SharedComponents/Now';

export default {
  components: {MyButton, Now},
  props: {},
  setup() {
    return () => <div>
      <div>Static</div>
      <div>
        <now/>
      </div>
      <my-button text="Click me" onMyBtnClicked={withActionLogs(() => console.log('handle button click'))}/>
    </div>
  }
}
</script>
