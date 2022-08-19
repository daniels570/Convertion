<template>
  <div>
    {{ converter }}
    <p>{{ monto }} {{ sourceRate }} {{ value_converter }} {{ targetRate }}</p>
  </div>
</template>

<script>
export default {
  props: ["value", "sourceRate", "targetRate", "monto"],
  data() {
    return {
      value_converter: null,
    };
  },
  methods: {
    COP(data) {
      const formatterPeso = new Intl.NumberFormat();
      this.value_converter = formatterPeso.format(data);
    },
  },
  computed: {
    converter() {
      this.value;
      this.COP(this.value);
    },
  },
};
</script>

<style>
</style>