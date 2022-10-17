
<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>


<script>

    import ShopLayout from "./Layouts/ShopLayout";

    export default {

        components: {
            ShopLayout
        },

        computed: {

            layout() {

                if(this.$route.meta.layout == 'shop-layout') return 'shop-layout';
            }
        },

    }

</script>


<style>

</style>
