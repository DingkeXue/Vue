<!--模板-->
<template>
  <footer>
    <p @click="Delete">{{copyright}}{{msg}}</p>
  </footer>
</template>

<!--行为-->
<script>
  export default  {
    name: 'hello',
    props: {
      msg: {
        type: String
      }
    },
    data() {
      return {
        copyright: 'Vue 脚手架 DEMO 版权归 @xue 所有'
      }
    },
    methods: {
      Delete: function () {
        this.msg = 'changed';
      }
    }
  }
</script>

<!--样式-->
<style scoped>
  footer {
    position: relative;
    bottom: 0;
    color: #222222;
    width: 100%;
    margin-top: 50px;
  }
  p {
    padding: 5px;
  }
</style>
