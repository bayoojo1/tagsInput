import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import TagsInput from './components/TagsInput.vue';

const app = createApp(App);
app.component('tags-input', TagsInput);

app.mount('#app');
