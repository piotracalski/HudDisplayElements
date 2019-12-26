<template>
  <div id="testing-area">
    <ProgressBar ref="progressBar" style="transform:scale(1)" :percentage="parseInt(percentage)" />
    <input type="range" min="0" max="100" step="1" name="percentage" v-model="percentage" @change="changeOfPercentage">
  </div>
</template>

<script>
import ProgressBar from './ProgressBar/ProgressBar'

export default {
  name: 'Demo_ProgressBar',
  components: {
    ProgressBar
  },
  data() {
    return {
      percentage: 43
    }
  },
  methods: {
      changeOfPercentage: function() {
          this.$refs.progressBar.adjustSegments();
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