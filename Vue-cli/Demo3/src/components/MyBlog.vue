<template>
  <div id="myBlog">
    <div class="container">
      <h1>我的博客</h1>
      <div class="search">
        <input v-model="search" type="text" placeholder="输入关键字">
        <button class="btn btn-primary">搜索</button>
      </div>
      <div v-for="blog in filterBlogs" class="single-blog">
        <router-link :to="'/blog/' + blog.id">
          <h2 v-changeColor>{{blog.title}}</h2>
          <p>{{blog.text | subContent}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'myBlog',
    data () {
      return {
        blogs: [],
        search: ''
      }
    },
    created() {
      axios.get('https://vue-blog-53cfe.firebaseio.com/posts.json').then( (response) => {
        return response.data;
      }).then(data => {
        let blogArray = [];
        for (let key in data) {
          data[key].id = key;
          blogArray.push(data[key]);
        }
        this.blogs = blogArray;
      }).catch(error => {
        console.log(error);
      })
    },
    computed: {
      filterBlogs() {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    },
    directives: {
      changeColor: {
        bind(el, binding, vnode) {
          el.style.color = '#' + Math.random().toString().slice(3, 9);
        }
      }
    },
    filters: {
      subContent(value) {
        return value.slice(0, 100) + '...'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }
  .single-blog {
    background: #eeeeee;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 1px 4px 4px rgba(0, 0, 0, .4);

  }
  .search,
  .single-blog {
    margin: 30px;
    padding: 30px;
  }

  input {
    width: 90%;
    padding: 8px;
  }

  button {
    padding: 12px 30px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    -webkit-transition: margin-left 1s;
    -moz-transition: margin-left 1s;
    -ms-transition: margin-left 1s;
    -o-transition: margin-left 1s;
    transition: margin-left 1s;
    margin-bottom: 20px;
  }

  h2:hover {
    margin-left: 30px;
  }

</style>
