
import { createApp } from 'vue';

import router from './router';

import 'resources/scss/includes/flags.scss';


// ------- Prime Vue --------

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


// ------- Vue --------

import App from "./App.vue";

const el = document.getElementById('app');

const app = createApp(App);

app.use(PrimeVue);
app.use(router);


app.mount(el);
