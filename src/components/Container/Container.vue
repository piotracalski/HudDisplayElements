<template>
    <div class="container">
        <!-- <Label /> -->
    </div>
</template>

<script>
import Label from './Label'

export default {
    name: 'Container',
    components: {
        Label
    }
}
</script>

<style>
    .container {
        width: 85vw;
        height: 90vh;
        margin: 0 auto;
        box-sizing: border-box;
        /* position: absolute;
        left: 600px;
        margin: 50px; */
        background-color: rgba(172, 206, 216, 0.1);
        /* background-image: linear-gradient(-90deg, rgb(60, 209, 172), rgb(68, 91, 143)); */
        /* background-color: #f7f7f7; */
        /* clip-path: polygon(0px 0px, 600px 0px, 600px 300px, 250px 300px, 200px 250px, 0px 250px); */
        /* border-radius: 10px; */
        /* border: 1px solid white; */
        /* box-shadow: 0 0 25px 0px rgb(55, 104, 139); */
        /* border-top: 10px double #fff; */
    }
</style>