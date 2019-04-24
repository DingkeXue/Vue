;(function() {
	new Vue({
		el: '#app',
		data: {
			health: 0,
			full: false,
		},
		methods: {
			add: function() {
				if (this.health <= 90) {
					this.health += 10;
				} else {
					this.full = true;
				}
			},
			restart: function() {
				this.health = 0;
				this.full = false;
			}
		}
	})
})();