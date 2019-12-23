<template>
  <div class="meter-wrapper">
      <Center :percentage="this.percentage"/>
      <div :key="segment.id" v-for="segment in this.segments">
        <Segment :segment="segment"/>
      </div>
  </div>
</template>

<script>
import Center from './Center'
import Segment from './Segment'

export default {
    name: 'Meter',
    components: {
        Center,
        Segment
    },
    data() {
        return {
            percentage: 13,
            availableSegments: undefined,
            segments: [],
            singleRotation: 6
        }
    },
    mounted() {
        this.availableSegments = 360 / this.singleRotation;
        this.setupSegments(this.percentage);
    },
    methods: {
        setupSegments: function (percentage) {
            let numberOfSegments = Math.round(this.availableSegments * this.percentage / 100);
            // console.log(numberOfSegments);
            for (let i = 0; i < numberOfSegments; i++) {
                let rotation = (360 / this.availableSegments) * i;
                this.segments.push({id: i, rotation: rotation});
            }
            // console.log(this.segments);
        }
    }
}
</script>

<style>
    .meter-wrapper {
        width: 200px;
        height: 200px;
        border: 1px solid #000;
        box-sizing: content-box;
        position: relative;
    }
</style>