
import { createApp } from 'vue';

import router from './router';


// ------- Prime Vue --------

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


// ------- Vue --------

import App from "./App.vue";

const el = document.getElementById('app');

const app = createApp(App);

app.use(PrimeVue);
app.use(router);


app.mount(el);
