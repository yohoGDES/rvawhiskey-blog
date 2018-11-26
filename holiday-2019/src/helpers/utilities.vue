<script>
/*
	This file is for storing reusable helper functions.
	To use these helper functions, import this file to whatever component you're working in like so:
		@import Util './helpers/utilities.vue';
	Then in any hook, method, or computed property fire the function like so:
		Util.slugify();

	Utility functions work best when they return a value.
*/

export default {
	goTo: function(path) {
		this.$router.push(path)
	},
	isEmpty: function(obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) { return false }
		}

		return JSON.stringify(obj) === JSON.stringify({})
	},
	keySymbol(item) {
		item = item.toLowerCase()
		var name = item.split(' ')
		var symbol = ''
		if (item === 'moonshine') {
			symbol = 'ms'
		} else {
			if (name.length > 1) {
				symbol = name[0].charAt(0) + name[1].charAt(0).toLowerCase()
			} else {
				symbol = name[0].charAt(0)
			}
		}

		return symbol
	},
	makeId: function() {
		var text = ''
		var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

		for (var i = 0; i < 15; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length))
		}

		return text
	},
	// Format the key / object parameters for transmitting over AJAX
	formatData: function(object) {
		var addParam = ''
		var paramString = ''
		for (var key in object) {
			addParam = key + '=' + object[key] + '&'
			paramString = paramString + addParam
		}
		return paramString
	},
	throttle: function(milliseconds, context) {
		/**
		* throttle
		* @param {integer} milliseconds This param indicates the number of milliseconds
		*     to wait between calls before calling the original function.
		* @param {object} What "this" refers to in the returned function.
		* @return {function} This returns a function that when called will wait the
		*     indicated number of milliseconds between calls before
		*     calling the original function.
		*/
		/* eslint-disable */
		var baseFunction = this,
			lastEventTimestamp = null,
			limit = milliseconds

		return function() {
			var self = context || this,
				args = arguments,
				now = Date.now()

			if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
				lastEventTimestamp = now
				baseFunction.apply(self, args)
			}
		}
		/* eslint-enable */
	},
	slugify: function(string) {
		/* eslint-disable */
		return string
			.toString()
			.trim()
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/[^\w\-]+/g, "")
			.replace(/\-\-+/g, "-")
			.replace(/^-+/, "")
			.replace(/-+$/, "");
		/* eslint-enable */
	}
}
</script>
