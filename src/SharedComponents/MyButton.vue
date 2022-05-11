<script>
export default {
  name: 'MyButton',
  props: {
    text: String,
  },
  emits: ['myBtnClicked'],
  setup(props, {emit}) {
    return () => <button onClick={() => {
      emit('myBtnClicked');
    }}>{props.text}</button>
  }
}
</script>
