
<template>
    <div>

        <div class="custom-dropdown">
            <Dropdown v-model="selectedCountry" :options="countries" placeholder="Select a City"
                      appendTo=".custom-dropdown" :autoOptionFocus="false">

                <template #value="slotProps">
                    <div class="country-item" v-if="slotProps.value">
                        <span :class="'flag flag-' + slotProps.value.code.toLowerCase()"></span>
                        <div>{{slotProps.value.name}}</div>
                    </div>
                    <span v-else>
                        {{slotProps.placeholder}}
                    </span>
                </template>

                <template #option="slotProps">
                    <div class="country-item">
                        <span :class="'flag flag-' + slotProps.option.code.toLowerCase()"></span>
                        <div>{{slotProps.option.name}}</div>
                    </div>
                </template>

            </Dropdown>

            <div v-if="selectedCountry">{{selectedCountry.name}}</div>
        </div>

    </div>
</template>


<script>

    import Dropdown from 'primevue/dropdown';


    export default {

        components: {
            Dropdown
        },

        data() {
            return {

                selectedCountry: null,
                countries: [
                    {name: 'Australia', code: 'AU'},
                    {name: 'Brazil', code: 'BR'},
                    {name: 'China', code: 'CN'},
                    {name: 'Egypt', code: 'EG'},
                    {name: 'France', code: 'FR'},
                    {name: 'Germany', code: 'DE'},
                    {name: 'India', code: 'IN'},
                    {name: 'Japan', code: 'JP'},
                    {name: 'Spain', code: 'ES'},
                    {name: 'United States', code: 'US'}
                ],
            }
        },

    }

</script>

<style lang="scss" scoped>

    :deep(.custom-dropdown) {

        .p-dropdown-panel {

            .p-dropdown-items {

                .p-dropdown-item.p-highlight {
                    background: azure;
                }

                .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    background: azure;
                }
            }

        }

        .p-dropdown {

            .p-dropdown-label {
                font-size: 15px;
            }
        }

        .country-item {

            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;


            .flag {
                width: 17px;
                height: 12px;
                margin-right: .5rem;
            }
        }
    }

</style>
