<template>
  <div id="testing-area">
    <Meter ref="meter" :value="percentage" style="transform:scale(0.5);"/>
    <input name="percentage" v-model="percentage" @change="setMeterPercentage">
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
      percentage: 99
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
    background-color: rgb(160, 160, 160);
  }
</style>