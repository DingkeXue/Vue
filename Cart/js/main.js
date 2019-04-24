new Vue({
   el: '#app',
   data: {
       goods: [
           {id: 1, name: 'Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待', price: 3599, num: 1},
           {id: 2, name: '华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机', price: 4289, num: 1},
           {id: 3, name: '荣耀8X 千元屏霸 91%屏占比 2000万AI双摄 4GB+64GB 幻夜黑 移动联通电信4G', price: 1599, num: 1},
       ],
       sum: 0,
       allCheck: false,
       allCheckData: [],
       checked: false,

   },
    methods: {
       add: function(id) {
            this.goods[id].num ++;
        },
        sub: function(id) {
            if (this.goods[id].num === 1) return false;
            this.goods[id].num --;
        },
       check: function (id) {
           if (!event.currentTarget.checked) {
               this.sum -=  this.goods[id].price * this.goods[id].num;
           }
           else {
               this.sum += this.goods[id].price * this.goods[id].num;
           }
       },
        selectAll: function () {
            if (!event.currentTarget.checked) {
                this.allCheckData = [];
                this.sum = 0;
            }

            else {
                this.goods.forEach((el, index) => {
                    this.allCheckData.push(el.id);
                    this.allCheck = true;
                });
                this.allCheckData.forEach((el, index) => {
                    this.sum += this.goods[index].price * this.goods[index].num;
                })
            }
        },
        remove: function (id) {
            this.goods.splice(id, 1);
        }
    }
});