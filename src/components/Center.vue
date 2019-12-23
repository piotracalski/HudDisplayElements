<template>
  <div class="meter-center">
      {{percentage}}
  </div>
  
</template>

<script>
export default {
    name: 'Center',
    props: ['percentage']
}
</script>

<style>
    .meter-center {
        height: 150px;
        width: 150px;
        background-color: rgb(1, 22, 36);
        border-radius: 50%;
        position: absolute;
        top: 25px;
        left:25px;
        color: rgb(22, 146, 230);
        font-size: 72px;
        line-height: 150px;
        text-align: center;
        vertical-align: middle;
    }
</style>