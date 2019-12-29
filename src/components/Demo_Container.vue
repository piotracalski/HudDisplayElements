<template>
  <div id="testing-area">
    <!-- <Container ref="container" style="transform:scale(1)" /> -->
  </div>
</template>

<script>
import Container from './Container/Container'

export default {
  name: 'Demo_Container',
  components: {
    Container
  },
  data() {
    return {
      percentage: 43
    }
  },
  methods: {
  }
}
</script>

<style>
  #testing-area {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    /* background-color: rgb(111, 129, 124); */
    /* padding: 5%; */
    /* display: grid;
    grid-template-columns: 4fr 2fr 4fr;
    grid-template-rows: 2fr 7fr 1fr;
    grid-gap: 25px; */
    }
    html {
        width: 100%;
        height: 100%;
        /* background-image: linear-gradient(225deg, rgb(60, 209, 172), rgb(77, 185, 218), rgb(68, 91, 143)); */
        /* background-image: url('../assets/bg.jpg');
        background-size: cover;
        background-repeat: no-repeat; */
        padding: 0px;
        /* background-image: url('bg.jpg'); */
    }
    /* body {
      position: absolute;
      top: 0px;
      margin: 0 auto;
    } */
</style>