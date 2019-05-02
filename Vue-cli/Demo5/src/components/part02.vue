<template>
  <div id="partB">
    <ul>
      <li v-for="item in products">
        <p>{{item.name}}</p>
        <span>￥{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'partB',
    data () {
      return {

      }
    },
    computed: {
      products() {
        return this.$store.getters.discount;
      }
    }
  }
</script>

<style>

</style>
