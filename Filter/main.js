Vue.filter('meter', function (data, unit) {
   data = data || 0;
   unit = unit || 'm';
   return data / 1000 + unit;
});

Vue.filter('change', function (data, unit) {
    data = data || 0;
    unit = unit || '元';
    return (data / 6).toFixed(3) + unit;
});

new Vue({
    el: '#app',
    data: {
        length: '',
        money: ''
    }
});