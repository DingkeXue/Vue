<template>
  <div class="single-blog">
    <div class="container">
      <h1>{{content.title}}</h1>
      <div class="text">
        <p>{{content.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'single-blog',
    data () {
      return {
        id: this.$route.params.id,
        content: ''
      }
    },
    created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(data => {
        this.content = data.body;
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
