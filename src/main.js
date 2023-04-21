import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';

import './assets/reset.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
