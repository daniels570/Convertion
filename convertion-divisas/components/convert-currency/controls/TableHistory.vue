<template>
    <v-card>
        {{ dataQuery }}
        <v-card-title>
            {{ dataTime }}
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
            </v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search">

        </v-data-table>
    </v-card>
</template>
<script>
export default {
    props: ["dataTime", "dataItems"],
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Nombre',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                { text: 'Abreaviatura', value: 'nameKey' },
                { text: 'Precio', value: 'value' },
            ],
            items: [],
        }
    },
    computed: {
        dataQuery() {
            if (this.dataItems != null) {
                this.items = this.dataItems.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                })
            }
        }
    }
}
</script>