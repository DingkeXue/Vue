<template>
  <div class="container">
    <div class="row">
      <h1>开店流程</h1>
      <div class="col-md-4 col-xs-12">
        <div class="avtor">1</div>
        <h2><strong>提交资料</strong></h2>
        <p>
          填写店铺信息，提交经营资质照片 填写您的收款信息，方便开店后快速提现
        </p>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="avtor">2</div>
        <h2><strong>审核签约</strong></h2>
        <p>
          等待资质审核（1-3个工作日） 审核通过，短信签约
        </p>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="avtor">3</div>
        <h2><strong>开门营业</strong></h2>
        <p>
          录入商品
        </p>
        <p>
          业务经理到店线下审核，审核通过即可开门营业
        </p>
      </div>
    </div>
    <div class="row">
      <h1>开店要求</h1>
      <div class="col-md-4 col-xs-12">
        <div class="icon"></div>
        <h2><strong>有实体门店</strong></h2>
        <p>
          入驻美团外卖平台前，需有线下实体店铺
        </p>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="icon"></div>
        <h2><strong>有经营资质</strong></h2>
        <p>
          申请开店过程中需要您提供符合国家法律规定的经营许可证照，包括但不限于营业执照、各类许可证、特许证件等
        </p>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="icon"></div>
        <h2><strong>品类范围</strong></h2>
        <p>
          美团外卖支持以下经营项目

          餐饮美食
          甜品饮品
          鲜花绿植
          生活超市
          生鲜果蔬
        </p>
      </div>
    </div>
  </div>
</template>


<style>
  h1,
  .avtor,
  .icon,
  .col-md-4 {
    text-align: center;
  }

  .avtor {
    background: #ffd161;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    font-weight: bold;
    margin: 0 auto;
    font-size: 24px;
    padding-top: 6%;
  }

  .col-md-4 {
    height: 400px;
    padding: 5%;
  }

  .icon {
    background: url("../assets/icon.jpg") center no-repeat;
    height: 60px;
    width: 60px;
    margin-left: 40%;
  }
</style>
