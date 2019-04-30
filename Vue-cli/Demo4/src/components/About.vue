<template>
  <div id="about">
    <div class="row">
      <div class="col-md-3">
        <nav class="navbar navbar-default">
          <ul class="nav nav-stacked">
            <li class="nav-link"><a href="#"></a></li>
            <li class="nav-link"><a href="#">公司介绍</a></li>
            <li class="nav-link"><a href="#">品牌资源</a></li>
            <li class="nav-link"><a href="#">招贤纳士</a></li>
            <li class="nav-link"><a href="#">联系我们</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-md-9">
        <div class="pic">
          <h2>这里是图片</h2>
        </div>
        <div class="contact">
          <ul class="list-group">
            <li class="list-group-item">电话：0251-123456</li>
            <li class="list-group-item">传真：0251-123456</li>
            <li class="list-group-item">邮箱：123456@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        users: []
      }
    }
  }
</script>


<style scoped>
  h2 {
    color: #fffdef;
    text-align: center;
  }
  .pic {
    width: 100%;
    height: 400px;
    background: #ff6347c2;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 10px;
  }

  a {
    text-align: center;
  }
</style>
