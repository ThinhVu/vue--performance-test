import { createApp } from 'vue';
// Using vue <template> feature to enable static path analysing to reduce VNode creation
// import App from './App.vue';
// createApp(App).mount('#app');

// Using JSX - Entire VNode tree will be created each change => not recommend for production.
// import App2 from './App2.vue';
// createApp(App2).mount('#app');

// Using JSX - improvement - moving dynamic path to Component => each time change, only this component change.
// import App3 from './App3.vue';
//createApp(App3).mount('#app');

// import App4 from './App4.vue';
// createApp(App4).mount('#app');

// import App5 from './App5.vue';
// createApp(App5).mount('#app');
