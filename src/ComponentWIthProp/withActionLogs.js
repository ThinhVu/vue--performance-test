import {ref} from 'vue';
const btnClicked = ref(0);

export default function withActionLogs(fn) {
  console.log('withActionLogs')
  return function() {
    btnClicked.value++;
    console.log('[action] execute fn', btnClicked.value)
    fn && fn()
  }
}
