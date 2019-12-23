<template>
  <div class="meter-segment" :id="'meter-segment-'+this.segment.id"></div>
</template>

<script>
export default {
    name: 'Segment',
    props: ['segment'],
    mounted() {
        document.getElementById(`meter-segment-${this.segment.id}`).style.transform = `rotate(${this.segment.rotation}deg)`;
    }
}
</script>

<style>
    .meter-segment {
        width: 6px;
        height: 21px;
        border-radius: 3px;
        background-color: rgb(3, 80, 131);
        box-shadow: rgb(3, 80, 131) 0px 0px 15px 2px;
        position: absolute;
        top:2px;
        left: 97px;
        transform-origin:3px 98px;
    }
</style>