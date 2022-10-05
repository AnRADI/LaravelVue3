
import { createApp } from 'vue';

import PrimeVue from 'primevue/config';


// ------- Vue --------

import Welcome from "@/Components/Pages/Shop/Welcome";


const el = document.getElementById('app');

createApp({
    components: {
        Welcome
    }
})
    .use(PrimeVue)
    .mount(el);
