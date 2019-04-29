<template>
  <div class="single-blog">
    <div class="container">
      <h1>{{content.title}}</h1>
      <div class="item">
        <p>文章类型：{{content.item}}</p>
      </div>
      <ul>
        <li v-for="category in content.categories">
          文章分类：{{category}}
        </li>
      </ul>
      <div class="text">
        <p>{{content.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'single-blog',
    data () {
      return {
        id: this.$route.params.id,
        content: ''
      }
    },
    created() {
      axios.get('https://vue-blog-53cfe.firebaseio.com/posts/' + this.id + '.json').then(data => {
        this.content = data.json();
      })
    }
  }
</script>


<style scoped>
  .container {
    background: #ddd;
  }
  h1 {
    margin-bottom: 30px;
  }
</style>
