
import { createApp } from 'vue';


import 'vuetify/styles'
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();


// ------- Vue --------

import Welcome from "@/Components/Pages/Shop/Welcome";


const el = document.getElementById('app');

createApp({
    components: {
        Welcome
    }
})
    .use(vuetify)
    .mount(el);
