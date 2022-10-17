
import Vue from 'vue';

import router from './router';


// ------- Vue Composition(vue 2) --------

import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)


// ------- Vuetify --------

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9155FD',
                accent: '#0d6efd',
                secondary: '#8A8D93',
                success: '#56CA00',
                info: '#16B1FF',
                warning: '#FFB400',
                error: '#FF4C51',
            },
            dark: {
                primary: '#9155FD',
                accent: '#0d6efd',
                secondary: '#8A8D93',
                success: '#56CA00',
                info: '#16B1FF',
                warning: '#FFB400',
                error: '#FF4C51',
            },
        },
    },
    icons: {
        iconfont: 'mdiSvg',
    },
});


// ------- Vue --------

import App from "./App.vue";

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')
