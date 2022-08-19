<template>
    <div>
        {{ parsearData }}
        <TableHistory :dataTime="this.dataTime" :dataItems="this.items" />
    </div>
</template>

<script>
import TableHistory from "@/components/convert-currency/controls/TableHistory";
const axios = require("axios");
const SERVER_URL = process.env.baseUrl;
const APP_ID = process.env.appId;
export default {
    components: {
        TableHistory,
    },
    data: () => ({
        cointName: null,
        dataTime: '',
        itemsValueCoint: null,
        items: null,
    }),
    methods: {
        timeDate() {
            let date = new Date()

            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()

            if (month < 10) {
                this.dataTime = `${year}-0${month}-${day}`
            } else {
                this.dataTime = `${year}-${month}-${day}`
            }
        },
        nameCointHttp() {
            this.$store.commit("progress", true);
            axios
                .get(`${SERVER_URL}currencies.json?app_id=${APP_ID}`, {})
                .then((response) => {
                    console.log();
                    let objectRates = response.data
                    this.cointName = objectRates
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
        valueCointHttp() {
            this.$store.commit("progress", true);
            axios
                .get(`${SERVER_URL}historical/${this.dataTime}.json?app_id=${APP_ID}&amp;base=USD`, {})
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

    },
    created() {
        this.timeDate()
        this.valueCointHttp()
        this.nameCointHttp()
    },
    computed: {
        parsearData() {
            if (this.cointName != null && this.itemsValueCoint != null) {
                const array = []
                for (const [key, value] of Object.entries(this.itemsValueCoint)) {
                    let objectNew = new Object()
                    objectNew[`name`] = this.cointName[`${key}`]
                    objectNew[`nameKey`] = `${key}`
                    objectNew[`value`] = `${value}`
                    array.push(objectNew);
                }
                this.items = array
            }
        }
    }
}
</script>

<style>
</style>