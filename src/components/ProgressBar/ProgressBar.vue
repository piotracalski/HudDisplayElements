<template>
    <div class="progressBar-wrapper" v-bind:style="{width: width + 'px'}">
    <transition-group name="progressBar-segment" tag="s">
        <div :key="segment.id" v-for="segment in this.displayedSegments">
            <Segment :segment="segment" />
        </div>
    </transition-group>
    </div>
</template>

<script>
import Segment from './Segment'

export default {
    name: 'ProgressBar',
    props: {
        percentage: Number
    },
    components: {
        Segment
    },
    data() {
        return {
            width: 500,
            segmentWidth: 50,
            allSegmentsCount: undefined,
            displayedSegments: []
        }
    },
    mounted() {
        this.allSegmentsCount = this.calcallSegmentsCount();
        this.adjustSegments();
    },
    methods: {
        calcallSegmentsCount: function () {
            return Math.round(this.width / this.segmentWidth);
        },
        calcDisplayedSegmentsCount: function () {
            return Math.round(this.allSegmentsCount * this.percentage / 100);
        },
        addSegment: function (count) {
            if (count > this.displayedSegments.length) {
                this.displayedSegments.push({id: this.displayedSegments.length + 1, allSegmentsCount: this.allSegmentsCount});
                setTimeout(() => {
                    this.addSegment(count);
                },100);
            }
        },
        removeSegment: function (count) {
            if (count < this.displayedSegments.length) {
                this.displayedSegments.pop();
                setTimeout(() => {
                    this.removeSegment(count);
                },100);
            }
        },
        adjustSegments: function () {
            let currentDsCount = this.displayedSegments.length;
            let newDsCount = this.calcDisplayedSegmentsCount();
            if (newDsCount > currentDsCount) {
                this.addSegment(newDsCount);
            } else if (newDsCount < currentDsCount) {
                this.removeSegment(newDsCount);
            }
        }
    }
}
</script>

<style>
    .progressBar-wrapper {
        height: 50px;
        /* border: 1px solid rgb(24, 199, 193); */
        /* border-radius: 20px; */
        overflow: visible;
    }
    s {
        display: flex;
        flex-direction: row;
    }
</style>