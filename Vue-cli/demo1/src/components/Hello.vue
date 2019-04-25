<!--模板-->
<template>
    <div id="hello">
      <h2></h2>
      <ul>
        <li v-for="user in users">
          <img src="../assets/yesu.jpg" alt="头像">
          <h2>{{user.name}}</h2>
          <h4>{{user.email}}</h4>
        </li>
      </ul>
      <button @click="Delete">Delete</button>
    </div>
</template>

<!--行为-->
<script>
  export default  {
    name: 'Hello',
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    data() {
      return {

      }
    },
    methods: {
      Delete: function () {
        this.users.pop();
      }
    }
  }
</script>

<!--样式-->
<style scoped>
  #hello {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  img {
    max-width: 50%;
    border-radius: 50%;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    max-width: 1200px;
    margin: 50px auto;
    padding-left: 0;
  }
  li {
    width: 300px;
    padding: 20px;
    margin: 30px 10px;
    flex-grow: 1;
    flex-basis: auto;
    background: #0096882e;
  }
</style>
