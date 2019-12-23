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
import {
    setSegmentMode
} from './methods'

export default {
    name: 'Meter',
    props: ['value'],
    components: {
        Center,
        Segment
    },
    data() {
        return {
            percentage: undefined,
            availableSegments: 52,
            segments: [],
            singleRotation: undefined
        }
    },
    mounted() {
        this.setPercentage(this.value);
        this.singleRotation = 360 / this.availableSegments;
        this.setupSegments(this.percentage);
    },
    methods: {
        changeOfPercentage: function (value) {
            this.setPercentage(value);
            this.adjustSegments();
        },
        setPercentage: function (value) {
            this.percentage = value;
            // console.log(`Current percentage: ${this.percentage}`)
        },
        setupSegments: function (percentage) {
            let numberOfActiveSegments = Math.round(this.availableSegments * this.percentage / 100);
            for (let i = 0; i < this.availableSegments; i++) {
                let rotation = (360 / this.availableSegments) * i;
                let mode;
                if (i <= numberOfActiveSegments && numberOfActiveSegments !== 0) {
                    mode = 'on'
                } else {
                    mode = 'default'
                }
                this.segments.push({id: i, rotation: rotation, mode: mode});
            }
        },
        adjustSegments: function () {
            let numberOfActiveSegments = Math.round(this.availableSegments * this.percentage / 100);
            console.log(numberOfActiveSegments)
            for (let i = this.availableSegments - 1; i>=0; i--) {
                let mode;
                if (i <= numberOfActiveSegments && numberOfActiveSegments !== 0) {
                    mode = 'on'
                } else {
                    mode = 'default'
                }
                // console.log(i);
                setSegmentMode(`meter-segment-${i}`, mode);
            }
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