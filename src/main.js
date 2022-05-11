import { createApp } from 'vue';
// Using vue <template> feature to enable static path analysing to reduce VNode creation
import App from './App.vue';
const app = createApp(App);
app.mount('#app');

// Using JSX - Entire VNode tree will be created each change => not recommend for production.
// import App2 from './App2.vue';
// const app2 = createApp(App2);
// app2.mount('#app');

// Using JSX - improvement - moving dynamic path to Component => each time change, only this component change.
// import App3 from './App3.vue';
// const app3 = createApp(App3);
// app3.mount('#app');
