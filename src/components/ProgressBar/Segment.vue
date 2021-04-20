<template>
  <div class="progressBar-segment" v-bind:style="segmentStyle"></div>
</template>

<script>
export default {
    name: 'Segment',
    props: {
        segment: Object
    },
    data() {
        return {
            segmentStyle: {
                backgroundColor: `${this.getColor()}`
                // boxShadow: `${this.getColor()} 0px 0px 3px 0px`
            }
        }
    },
    methods: {
        getColor: function () {
            let blue = 0;
            let red = 200;
            let green = 10;
            // if (this.segment.id <= this.segment.allSegmentsCount / 2) {
            //     green = Math.round(255 * this.segment.id / (this.segment.allSegmentsCount / 2));
            //     red = 255;
            // } else if (this.segment.id <= this.segment.allSegmentsCount) {
            //     green = 255;
            //     red = Math.round(255 * (2 - this.segment.id / (this.segment.allSegmentsCount / 2)));
            // }
            blue = 255 * this.segment.id / this.segment.allSegmentsCount;
            return `rgb(${red},${green},${blue})`;
        }
    }
}
</script>

<style>
    .progressBar-segment {
        width: 40px;
        height: 42px;
        margin: 4px 5px;
        box-sizing: border-box;
        /* border-radius: 3px; */
        transform:skewX(-15deg);
    }
    .progressBar-segment-enter-active, .progressBar-segment-leave-active {
        transition: all 0.2s;
    }
    .progressBar-segment-enter, .progressBar-segment-leave-to {
        opacity: 0;
        transform: translateY(50px) rotate(90deg);
    }
</style>