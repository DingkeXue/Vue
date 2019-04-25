<!--模板-->
<template>
  <header>
    <h1 @click="changeTitle">{{title}} {{msg}}</h1>
  </header>
</template>

<!--行为-->
<script>
  export default  {
    name: 'header',
    props: {
      msg: {
        type: String,
      }
    },
    data() {
      return {
        title: '世界名人简介'
      }
    },
    methods: {
      Delete: function () {
        this.msg = null;
      },
      changeTitle: function () {
        this.$emit('titleChanged', '世界一百人');
      }
    }
  }
</script>

<!--样式-->
<style scoped>
  header {
    background: deepskyblue;
  }
  h1 {
    color: #fffdef;
    padding: 15px 0;
    margin: 0 auto;
  }
</style>
