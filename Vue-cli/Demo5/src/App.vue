<template>
  <div id="app">
    <partA></partA>
   <!-- <partB></partB>-->
  </div>
</template>

<script>
  import partA from './components/part01'
  import partB from './components/part02'

export default {
  name: 'app',
  components: {
    partA,
    partB
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
