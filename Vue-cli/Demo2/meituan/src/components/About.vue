<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group mb-5">
          <router-link tag="li" :to="{name: 'ContactLink'}">
            <a class="list-group-item">联系我们</a>
          </router-link>
          <router-link tag="li" :to="{name: 'HistoryLink'}">
            <a class="list-group-item">历史订单</a>
          </router-link>
          <router-link tag="li" :to="{name: 'OrderGuideLink'}">
            <a class="list-group-item">点餐指南</a>
          </router-link>
        </div>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default  {
    data() {
      return {
        name: 'rubby'
      }
    },

    // 组件内守卫
    /*beforeRouteEnter(to, from, next) {
      alert("即将进入该网页");
      next(vm => {
        alert(vm.name);
      });
    },
    beforeRouteLeave(to, form, next) {
      if (confirm("确定离开？") === true) {
        next();
      } else {
        next(false);
      }
    }*/
  }
</script>

<style>
  .list-group-item {
    margin: 20px;
    text-align: center;
    padding: 20px 0;
  }

  .panel {
    margin-top: 20px;
  }
</style>
