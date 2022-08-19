<template>
    <v-card elevation="7" :loading="false" tile>
        <v-card-title primary-title class="justify-center">
            <div>
                <h3>Aplicación de Divisas</h3>
            </div>
        </v-card-title>
        <v-tabs v-model="tab" background-color="light-blue darken-4" centered icons-and-text>
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
                Conversion
                <v-icon :color="'white'">balance</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
                Historial
                <v-icon :color="'white'">history_toggle_off</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :value="'tab-' + 1">
                <v-card flat>
                    <v-card-text>
                        <Convert />
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item :value="'tab-' + 2">
                <v-card flat>
                    <v-card-text>
                        <History />
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import Convert from "@/components/convert-currency/forms/Convert";
import History from "@/components/convert-currency/dashboards/History";
export default {
    components: { Convert, History },
    data() {
        return {
            tab: null
        }
    },

}
</script>

<style>
</style>