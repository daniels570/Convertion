<template>
    <v-card>
        {{ select }}
        {{ item }}
        <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
            {{ title }}
        </v-card-title>
        <v-card-text>
            <v-subheader class="pa-0">
            </v-subheader>
            <v-autocomplete v-model="shortName" :items="coint" item-text="name" item-value="id" :readonly="!isEditing"
                :label="'moneda'" persistent-hint prepend-icon="mdi-city">
            </v-autocomplete>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ["title", "items"],
    data() {
        return {
            isEditing: true,
            shortName: null,
            coint: [],
        }
    },
    methods: {
        emit(data) {
            let obj = {
                data: data,
                viewResult: false
            };
            this.$emit("select", obj);
        },

    },
    computed: {
        select() {
            this.shortName
            if (this.shortName != null) {
                this.emit(this.shortName)
            }
        },
        item() {
            this.items
            if (this.items != []) {
                this.coint = this.items
            }
        }
    }
}
</script>

<style>
</style>