Vue.directive('pin', function (el, binding) {
   if (binding.value) {
       el.style.position = 'fixed';
       el.style.left = 100 + 'px';
       el.style.top = 100 + 'px';
   } else {
       el.style.position = 'static';
   }
});


Vue.directive('fix', function (el, binding) {
    let options = binding.modifiers;
    let color = binding.arg;
    if (binding.value) {
        for (let key in options) {
            el.style.position = 'fixed';
            el.style[key] = 100 + 'px';
        }
    } else {
        el.style.position = 'static';
    }
    if (color === 'true') {
        el.style.background = 'pink';
    }
});

new Vue({
    el: '#app',
    data: {
        card: {
            pinned: false
        },
        card2: {
            pinned: false
        }
    }
});