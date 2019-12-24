<template>
  <div class="meter-wrapper">
      <Center :percentage="this.percentage"/>
      <div :key="segment.id" v-for="segment in this.segments">
        <Segment :segment="segment" :allSegments="availableSegments"/>
      </div>
  </div>
</template>

<script>
import Center from './Center'
import Segment from './Segment'
import {
    setSegmentMode,
    setCenterValueColor
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
            availableSegments: 64,
            segments: [],
            singleRotation: undefined
        }
    },
    mounted() {
        this.setPercentage(this.value);
        this.singleRotation = 360 / this.availableSegments;
        this.setupSegments();
        setCenterValueColor('meter-center', this.percentage);
    },
    methods: {
        changeOfPercentage: function (value) {
            this.setPercentage(value);
            this.adjustSegments();
        },
        setPercentage: function (value) {
            this.percentage = value;
        },
        setupSegments: function () {
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
            for (let i = this.availableSegments - 1; i>=0; i--) {
                let mode;
                if (i <= numberOfActiveSegments && numberOfActiveSegments !== 0) {
                    mode = 'on'
                } else {
                    mode = 'default'
                }
                setSegmentMode(`meter-segment-${i}`, mode, this.availableSegments);
            }
            setCenterValueColor('meter-center', this.percentage);
        }
    }
}
</script>

<style>
    .meter-wrapper {
        width: 200px;
        height: 200px;
        box-sizing: content-box;
        position: relative;
        border-style: solid;
        border-width: 5px;
        border-color: white;
        border-top: none;
        border-bottom: none;
        /* border-right: none;
        border-left: none; */
        border-radius: 40%;
    }
</style>