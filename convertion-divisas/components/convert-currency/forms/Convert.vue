<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        {{ update }}
        <v-text-field type="number" v-model="monto" :counter="10" :rules="montoRules" label="* Monto" required>
        </v-text-field>
        <SelectCoint :title="'* Moneda origen'" v-on:select="this.origin" :items="this.coint" />
        <SelectCoint :title="'* Moneda objetivo'" v-on:select="this.objetive" :items="this.coint" />
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="convertir" block>
            Convertir
        </v-btn>
        <v-divider></v-divider>
        <v-card v-if="this.viewResult">
            <v-card-text>
                <v-alert border="right" color="blue-grey" dark>
                <FormatMoney :value="this.mountConverted" :sourceRate="this.sourceRate" :targetRate="this.targetRate"
                    :monto="this.monto" />
            </v-alert>
            </v-card-text>
        </v-card>
    </v-form>
</template>
<script>
import SelectCoint from "@/components/convert-currency/controls/SelectCoint";
import FormatMoney from "@/components/FormatMoney";
const axios = require("axios");
const SERVER_URL = process.env.baseUrl;
const APP_ID = process.env.appId;
export default {
    components: {
        SelectCoint,
        FormatMoney
    },
    data: () => ({
        viewResult: false,
        valid: true,
        monto: '',
        montoRules: [
            v => !!v || 'Monto es requerido',
        ],
        sourceRate: '',
        targetRate: '',
        mountConverted: '',
        coint: [],
        itemsValueCoint: null,
    }),

    methods: {
        nameCoint() {
            this.$store.commit("progress", true);
            axios
                .get(`${SERVER_URL}currencies.json?app_id=${APP_ID}`, {})
                .then((response) => {
                    console.log();
                    let objectRates = response.data
                    const array = []

                    for (const [key, value] of Object.entries(objectRates)) {
                        let objectNew = new Object()
                        objectNew[`name`] = `${value} ${key}`
                        objectNew[`id`] = `${key}`
                        array.push(objectNew);
                    }
                    this.coint = array
                    this.$store.commit("progress", false);
                })
                .catch((e) => {
                    let payload = {
                        active: true,
                        type: "error",
                        data: "Error en el proceso",
                    };
                    this.$store.commit("modalAlert", payload);
                    this.$store.commit("progress", false);
                });
        },
        valueCoint() {
            this.$store.commit("progress", true);
            axios
                .get(`${SERVER_URL}latest.json?app_id=${APP_ID}`, {})
                .then((response) => {
                    console.log();
                    this.itemsValueCoint = response.data.rates
                    this.$store.commit("progress", false);
                })
                .catch((e) => {
                    let payload = {
                        active: true,
                        type: "error",
                        data: "Error en el proceso",
                    };
                    this.$store.commit("modalAlert", payload);
                    this.$store.commit("progress", false);
                });
        },
        convertir() {
            if (this.$refs.form.validate()
                && this.itemsValueCoint[`${this.sourceRate}`] != undefined
                && this.itemsValueCoint[`${this.targetRate}`] != undefined) {
                this.mountConverted = this.monto / this.itemsValueCoint[`${this.sourceRate}`] * this.itemsValueCoint[`${this.targetRate}`]
                this.viewResult = true
            } else {
                let payload = {
                    active: true,
                    type: "error",
                    data: "Los campos * son obligatorios",
                };
                this.$store.commit("modalAlert", payload);
            }
        },
        origin(data) {
            this.sourceRate = data.data
            this.viewResult = data.viewResult
        },
        objetive(data) {
            this.targetRate = data.data
            this.viewResult = data.viewResult
        },
    },
    created() {
        this.nameCoint()
        this.valueCoint()
    },
    computed: {
        update() {
            this.monto
            this.viewResult = false;
        }
    }
}
</script>

<style>
</style>