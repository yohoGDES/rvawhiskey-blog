<template>
	<ul class="whis-key">
		<li v-for="type in types" :key="type.index" class="key">
			<span class="key-block" :class="'key-block--' + $util.keySymbol(type)">
				{{type}}
			</span>
		</li>
		<!-- <li class="key key--b">
			<span class="key-block key-block--b"></span>
			Bourbon
		</li>
		<li class="key key--s">
			<span class="key-block key-block--s"></span>
			Scotch
		</li>
		<li class="key key--j">
			<span class="key-block key-block--j"></span>
			Japanese
		</li>
		<li class="key key--r">
			<span class="key-block key-block--r"></span>
			Rye
		</li>
		<li class="key key--i">
			<span class="key-block key-block--i"></span>
			Irish
		</li>
		<li class="key key--m">
			<span class="key-block key-block--m"></span>
			Multi-Grain Blend
		</li>
		<li class="key key--o">
			<span class="key-block key-block--o"></span>
			Other
		</li> -->
	</ul>
</template>
<script>
export default {
	name: 'whis-key',
	props: {
		types: {
			type: Array
		}
	}
}
</script>
