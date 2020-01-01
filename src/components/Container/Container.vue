<template>
    <div 
        class="container" 
        augmented-ui="l-clip-y b-clip-x bl-clip tr-clip-x exe"
        v-bind:style="containerStyle"
    >
        <!-- <ContainerBg :containerStyle="containerStyle"/> -->
    </div>
</template>

<script>
import Label from './Label'
import ContainerBg from './ContainerBg'

export default {
    name: 'Container',
    components: {
        Label,
        ContainerBg
    },
    data() {
        return {
            containerStyle: {
                width: `925px`,
                height: `500px`
            }
        }
    }
}
</script>

<style>
    .container {
        /* width: 500px;
        height: 300px; */
        margin: 0 auto;
        box-sizing: border-box;
        /* padding: 30px; */
        /* background-image: url('../../assets/bg.jpg'); */
        background-size: cover;
        /* position: absolute;
        left: 600px;
        margin: 50px; */
        /* background-color: rgba(172, 206, 216, 0.1); */
        /* background-color: coral; */
        /* background-image: linear-gradient(-90deg, rgb(60, 209, 172), rgb(68, 91, 143)); */
        /* background-color: #f7f7f7; */
        /* clip-path: polygon(0px 0px, 600px 0px, 600px 300px, 250px 300px, 200px 250px, 0px 250px); */
        /* border-radius: 10px; */
        /* border: 1px solid white; */
        /* box-shadow: 0 0 25px 0px rgb(55, 104, 139); */
        /* border-top: 10px double #fff; */
        --aug-border: 3px;
        --aug-inset: 2px;
        --aug-border-bg: rgba(17, 19, 20, 0.466);
        --aug-inset-bg: rgba(172, 206, 216, 0.5);
        --aug-l-height: 50%; 
        --aug-l-width: 10px;
        --aug-b-width: 20%; 
        --aug-b-height: 10px;
        --aug-b-offset: 0px;
        --aug-bl: 10px;
        --aug-tr-width: 20%;
        --aug-tr-height: 10px;
        font-weight: 900;
        font-size: 24px;
    }
</style>