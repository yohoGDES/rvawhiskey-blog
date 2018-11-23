<template>
	<a href="https://www.abc.virginia.gov/products/" target="_blank" v-if="whiskey">
		{{whiskey.name}} | {{whiskey.price}} | {{whiskey.type}}
	</a>
</template>
<script>
export default {
	name: 'whiskey',
	props: {
		whiskey: {
			type: Object
		}
	}
}
</script>
