<template>
	<div>
		<a :href="url(whiskey)" target="_blank" v-if="whiskey && url(whiskey)">
			{{whiskey.name}} | {{whiskey.price}}<span class="virginia-made" v-if="whiskey.virginiaMade"></span><span class="virginia-made virginia-made--oos" v-if="whiskey.outOfState"></span>
		</a>
	</div>
</template>
<script>
export default {
	name: 'whiskey',
	props: {
		whiskey: {
			type: Object
		}
	},
	methods: {
		url(whiskey) {
			if (whiskey.url) {
				return whiskey.url
			} else {
				return 'https://www.abc.virginia.gov/products/' + whiskey.type.toLowerCase() + '/' + this.$util.slugify(whiskey.name)
			}
		}
	}
}
</script>
