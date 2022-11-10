<template>
    <div>
        <router-link to="/welcome">Перейти к Welcome</router-link>
        <router-link to="/product">Перейти к Product</router-link>

        <InputSwitch @change="themeToggle" v-model="checked" />

        <slot></slot>
    </div>
</template>


<script>

import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';


export default {

    components: {
        InputSwitch,
        Button
    },


    created() {

        this.getTheme();
    },


    computed: {

        themeLink() {
            return document.getElementById('theme');
        }
    },


    data() {
       return {
           theme: null,
           checked: false
       }
    },


    methods: {

        getTheme() {

            this.theme = localStorage.getItem('theme');


            // --------- theme from storage ---------

            if(this.theme) {

                this.themeLink.href =
                    this.themeLink.href.replace(/themes\/.*?\.css/, 'themes/' + this.theme + '.css');
            }

            // --------- theme default(app.blade.php) ---------

            else {

                this.theme =
                    this.themeLink.href.match(/themes\/(.*?)\.css/)[1];

                localStorage.setItem('theme', this.theme);
            }


            this.checked = (this.theme === 'red') ? true : false; // toggle switch

            this.themeLink.disabled = false; // enabled theme
        },


        themeToggle() {

            this.theme = this.checked ? 'red' : 'azure';

            localStorage.setItem('theme', this.theme);


            this.themeLink.href =
                this.themeLink.href.replace(/themes\/.*?\.css/, 'themes/' + this.theme + '.css');
        }
    },


}

</script>


<style lang="scss" scoped>


</style>
