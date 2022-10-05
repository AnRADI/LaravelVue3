
<template>


    <MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" />

</template>


<script>

    import MultiSelect from 'primevue/multiselect';

    export default {

        components: {
            MultiSelect
        },

        data() {
            return {
                selectedCars: null,
                cars: [
                    {brand: 'Audi', value: 'Audi'},
                    {brand: 'BMW', value: 'BMW'},
                    {brand: 'Fiat', value: 'Fiat'},
                    {brand: 'Honda', value: 'Honda'},
                    {brand: 'Jaguar', value: 'Jaguar'},
                    {brand: 'Mercedes', value: 'Mercedes'},
                    {brand: 'Renault', value: 'Renault'},
                    {brand: 'Volkswagen', value: 'Volkswagen'},
                    {brand: 'Volvo', value: 'Volvo'}
                ]
            }
        }
    }

</script>

<style lang="scss">
    @import '~primevue/resources/themes/saga-blue/theme.css';
    @import '~primevue/resources/primevue.min.css';
    @import '~primeicons/primeicons.css';
</style>
