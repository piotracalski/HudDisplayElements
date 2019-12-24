<template>
  <div id="testing-area">
    <Meter ref="meter" :value="percentage" style="transform:scale(1);"/>
    <input type="range" min="0" max="100" step="1" name="percentage" v-model="percentage" @change="setMeterPercentage">
  </div>
</template>

<script>
import Meter from './Meter/Meter'

export default {
  name: 'TestingArea',
  components: {
    Meter
  },
  data() {
    return {
      percentage: 43
    }
  },
  methods: {
    setMeterPercentage: function () {
      this.$refs.meter.changeOfPercentage(this.percentage);
    }
  }
}
</script>

<style>
  #testing-area {
    width: 100%;
    height: 100%;
    background-color: rgb(6, 32, 24);
    padding: 5%;
    }
</style>