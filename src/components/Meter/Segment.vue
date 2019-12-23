<template>
  <div class="meter-segment" :id="'meter-segment-'+this.segment.id"></div>
</template>

<script>
import {
    setSegmentMode
} from './methods'
export default {
    name: 'Segment',
    props: ['segment'],
    mounted() {
        document.getElementById(`meter-segment-${this.segment.id}`).style.transform = `rotate(${this.segment.rotation}deg)`;
        setSegmentMode(`meter-segment-${this.segment.id}`, this.segment.mode);
    }
}
</script>

<style>
    .meter-segment {
        width: 6px;
        height: 21px;
        box-sizing: content-box;
        border-radius: 3px;
        position: absolute;
        top:2px;
        left: 97px;
        transform-origin:3px 98px;
        background-color: none;
        box-shadow: none;
        border: 1px solid rgb(3, 80, 131);
    }
    .on {
        background-color: rgb(3, 80, 131);
        box-shadow: rgb(3, 80, 131) 0px 0px 4px 1px;
    }
</style>