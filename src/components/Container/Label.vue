<template>
    <div class="label">
        LABEL
    </div>
</template>

<script>
export default {
    name: 'Label'
}
</script>

<style>
    .label {
        width: 100px;
        height: 30px;
        box-sizing: border-box;
        /* border-left: 2px solid white;
        border-right: 2px solid white; */
        /* border-radius: 15px; */
        position: absolute;
        top: -5px;
        left: 250px;
        /* background-color: rgba(67, 206, 171, 0.0); */
        /* transform: rotate(-5deg); */
        background-image: linear-gradient(225deg, rgb(60, 209, 172), rgb(77, 185, 218));
        color: #f7f7f7;
        line-height: 28px;
    }
</style>