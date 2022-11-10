
<template>
    <div class="welcome">

        <div class="box-1">
            <div class="title-1">заголовок 1</div>
        </div>

        <div class="box">
            <div class="title">заголовок</div>
        </div>

        <InputText type="text" class="custom-input" v-model="value" placeholder="Введите текст"/>
        <div>{{value}}</div>

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
    import InputText from 'primevue/inputtext';


    export default {

        components: {
            Dropdown,
            InputText
        },


        data() {
            return {
                value: null,
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

    .box {
        width: 200px;
        height: 200px;
        background: var(--background-box);

        .title {
            color: var(--color-title);
        }
    }

    .box-1 {
        width: 200px;
        height: 200px;
        background: var(--primary-color);

        .title-1 {
            color: var(--primary-color-text);
        }
    }

    :deep(.custom-input) {

        background-color: var(--dron-gon);
        width: 300px;
    }

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
