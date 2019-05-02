<template>
  <div id="partA" class="container">
    <ul class="list-group">
      <li class="col-md-3 list-group-item" v-for="product in products">
        <div class="img">
        </div>
        <div class="content">
          <p><strong>￥{{product.price}}</strong></p>
          <p>{{product.name}}</p>
        </div>
      </li>
    </ul>
    <button class="btn btn-primary" @click="decrement">我要打折</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'partA',
    data () {
      return {

      }
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      ...mapGetters([
        "discount"
      ])
    },
    methods: {
      decrement() {
        return this.$store.dispatch('decrement').then(() => {
          alert("打折成功");
        })
      }
      }
  }
</script>

<style scoped>
  .list-group-item {
    height: 300px;
  }
  .img {
    height: 40%;
  }
</style>
