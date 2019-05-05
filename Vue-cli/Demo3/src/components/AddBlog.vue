<template>
  <div class="container">
    <div class="addBlog" v-if="!Blog.submitted">
      <h1>添加博客</h1>
      <div class="content">
        <form class="form-list">
          <div class="form-group">
            <label>标题</label>
            <input type="text" v-model="Blog.title">
          </div>
          <div class="form-group">
            <label>内容</label>
            <textarea name="text" rows="10" v-model="Blog.text"></textarea>
          </div>
          <div class="form-group">
            <label>框架分类</label>
            <div class="category">
              <label>Vue.js</label>
              <input type="checkbox" value="Vue.js" v-model="Blog.categories">
              <label>React.js</label>
              <input type="checkbox" value="React.js" v-model="Blog.categories">
              <label>AngularJS</label>
              <input type="checkbox" value="AngularJS" v-model="Blog.categories">
            </div>
          </div>
          <div class="form-group">
            <label>文章分类</label>
            <select v-model="Blog.author">
              <option v-for="item in Blog.items">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit" @click.prevent="post">提交</button>
          </div>
        </form>
      </div>
    </div>
    <div class="published form-group"  v-if="Blog.submitted">
      <div class="preview" v-if="Blog.submitted">
        <h1>博客预览</h1>
        <div class="title form-group">
          <label>标题</label>
          <p>{{this.Blog.title}}</p>
        </div>
        <div class="text form-group">
          <label>内容</label>
          <p>{{this.Blog.text}}</p>
        </div>
        <div class="category form-group">
          <label>文章分类</label>
          <ul class="category">
            <li v-for="category in Blog.categories">{{category}}</li>
          </ul>
        </div>
      </div>
      <h1>文章已发布</h1>
      <router-link to="/">回到首页</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'addBlog',
    data () {
      return {
        Blog: {
          items: ['原创', '转载'],
          authors: '',
          categories: [],
          title: '',
          text: '',
          submitted: false
        },
      }
    },
    methods: {
      post() {
        axios.post('https://vue-blog-53cfe.firebaseio.com/posts.json', this.Blog).then((response) => {
          this.Blog.submitted = true;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    text-align: center;
}

  .form-group {
    margin: 30px;
  }

  label,
  input[type=checkbox] {
    display: inline-block;
  }

  input[type=text],
  textarea,
  .btn,
  select {
    width: 100%;
    padding: 10px;
  }

</style>
