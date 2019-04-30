<template>
  <div id="detail">
    <div class="showDetail" v-if="show">
      <h1>{{user.name}} 的详情</h1>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-user"></span> <strong>姓名：</strong> {{user.name}}</li>
        <li class="list-group-item"><span class="glyphicon glyphicon-earphone"></span> <strong>电话：</strong> {{user.phone}}</li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope"></span> <strong>Email：</strong> {{user.email}}</li>
        <li class="list-group-item"><span class="glyphicon glyphicon-list-alt"></span> <strong>备注：</strong> {{user.other}}</li>
      </ul>
      <div class="button-group">
        <router-link to="/"><button class="btn btn-primary">返回</button></router-link>
        <button class="btn btn-warning" @click="change">修改</button>
      </div>
    </div>
    <div class="updateDetail" v-if="!show">
      <h1>修改 {{user.name}} 的信息</h1>
      <form class="form">
        <div class="form-group"><span class="glyphicon glyphicon-user"></span> <strong>姓名：</strong>
          <input type="text" value="user.name" class="form-control" v-model="user.name">
        </div>
        <div class="form-group"><span class="glyphicon glyphicon-earphone"></span> <strong>电话：</strong>
          <input type="text" value="user.phone" class="form-control" v-model="user.phone">
        </div>
        <div class="form-group"><span class="glyphicon glyphicon-envelope"></span> <strong>Email：</strong>
          <input type="text" value="user.email" class="form-control" v-model="user.email">
        </div>
        <div class="form-group"><span class="glyphicon glyphicon-list-alt"></span> <strong>备注：</strong>
          <textarea type="text" value="user.other" class="form-control" v-model="user.other"></textarea>
        </div>
      </form>
      <div class="button-group">
        <button class="btn btn-primary" @click="update(user.id)">提交</button>
        <button class="btn btn-danger pull-right" @click="Delete(user.id)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'detail',
    data() {
      return {
        user: '',
        show: true,
      }
    },
    methods: {
      fetchUser(id) {
        axios.get('http://localhost:3000/posts/' + id).then(response => {
          this.user = response.data;
        })
      },
      change() {
        this.show = false;
      },
      update(id) {
        axios.put('http://localhost:3000/posts/' + id, this.user).then(response => {
          this.$router.push({path: '/', query: {alert: "信息更新成功！"}});
        }).catch(err => {
          alert("错误："  + err);
        })
      },
      Delete(id) {
        axios.delete('http://localhost:3000/posts/' + id).then(response => {
          this.$router.push({path: '/', query: {alert: "用户删除成功！"}});
        }).catch(err => {
          alert("错误：" + err);
        })
      }
    },
    created() {
      this.fetchUser(this.$route.params.id);
    }

  }
</script>


<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .showDetail,
  .updateDetail {
    width: 600px;
    margin: 50px auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    color: #fffdef;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    width: 100%;
    padding: 6px;
  }

  .button-group .btn {
    width: 49%;
    display: inline-block;
  }

  .form-control {
    padding: 8px;
  }

</style>
