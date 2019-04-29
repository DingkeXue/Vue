<template>
  <div class="Home">
    <div class="row">
      <div class="col-md-3">
        <nav  class="navbar navbar-default">
          <ul class="navbar nav nav-pills nav-stacked">
            <li class="nav-link"><a href="#">关于我</a></li>
            <li class="nav-link"><a href="#">找到我</a></li>
            <li class="nav-link"><a href="#">夸奖我</a></li>
            <li class="nav-link"><a href="#">打赏我</a></li>
          </ul>
        </nav>
        <aside>
          <div class="advertise">
            <h1>广告位招租</h1>
            <img src="../assets/mac2.jpg" alt="pic">
          </div>
        </aside>
      </div>
      <div class="col-md-8 pull-right">
        <div class="card color"></div>
        <div class="card"></div>
        <div class="card color"></div>
        <div class="card"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
a {
  text-align: center;
}

  li {
    margin-bottom: 20px;
  }

  img {
    max-width: 80%;
  }

  .advertise {
    text-align: center;
    margin-top: 50px;
  }

  h1 {
    margin: 40px;
  }

  .card {
    height: 30vh;
    background: #ddd;
    margin-bottom: 20px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, .3);
  }

  .col-md-3 {
    position: fixed;
    top: 100px;
    left: 0;
  }

  .col-md-8 {
    margin-right: 4vw;
  }

  .card.color {
    background: #ff63476b;
  }

</style>
