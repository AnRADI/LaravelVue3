
<template>
    <div>

        <v-row>
            <v-col
                cols="12"
                md="4"
            >
                <dashboard-weekly-overview></dashboard-weekly-overview>
            </v-col>
        </v-row>

    </div>
</template>


<script>

    import DashboardWeeklyOverview from '@/Components/DashboardWeeklyOverview';


    export default {

        data() {
            return {

            }
        },

        components: {
            DashboardWeeklyOverview
        },



    }

</script>

<style lang="scss">



</style>
