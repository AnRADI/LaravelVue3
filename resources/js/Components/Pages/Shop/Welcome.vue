
<template>

    <v-select
        v-model="select"
        :items="items"
        variant="outlined"
        label="Select"
    ></v-select>
    <div>{{select}}</div>
</template>


<script>

    import {VSelect} from 'vuetify/components/VSelect';

    export default {

        components: {
            VSelect
        },

        data() {
            return {
                select: undefined,
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            }
        }
    }

</script>

<style lang="scss">

</style>
