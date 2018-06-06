<template>
    <canvas></canvas>
</template>

<script>
import startRobots from './Robots.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted(){
    startRobots()
  },
  methods: {         
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body, html {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    canvas {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
</style>
