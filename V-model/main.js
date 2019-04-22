let app = new Vue({
    el: '#app',
    data: {
        gender: 'male',
        message: '',
        selected: '',
        select: 1,
        name: '',
        text: '',
        num: null,
        options: [
            {text: 'Boo', value: 1},
            {text: 'Foo', value: 2}
        ]
    }
});