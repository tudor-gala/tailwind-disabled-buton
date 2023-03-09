import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Button from '@/components/Button.vue';

import './assets/style.css';

const app = createApp();

app.component('tw-button', Button);
app.mount('#app');
