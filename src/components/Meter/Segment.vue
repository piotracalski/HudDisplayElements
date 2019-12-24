<template>
  <div class="meter-segment" :id="'meter-segment-'+this.segment.id"></div>
</template>

<script>
import {
    setSegmentMode,
    getColor
} from './methods'
export default {
    name: 'Segment',
    props: ['segment', 'allSegments'],
    mounted() {
        document.getElementById(`meter-segment-${this.segment.id}`).style.transform = `rotate(${this.segment.rotation}deg)`;
        this.setColor(getColor(this.segment.rotation));
        setSegmentMode(`meter-segment-${this.segment.id}`, this.segment.mode, this.allSegments);
    },
    methods: {
        setColor: function (rgb) {
            document.getElementById(`meter-segment-${this.segment.id}`).style.borderColor = rgb;
        }
    }
}
</script>

<style>
    .meter-segment {
        width: 6px;
        height: 25px;
        box-sizing: border-box;
        border-radius: 3px;
        position: absolute;
        top:2px;
        left: 97px;
        transform-origin:3px 98px;
        background-color: none;
        box-shadow: none;
        border-style: solid;
        border-width: 1px;
    }
    .on {
        box-shadow: initial;
    }
</style>