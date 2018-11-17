<template>
	<div id="app" class="global-wrapper">
		<icons></icons>
		<hero></hero>

		<main class="content-wrapper">
            <div class="content__inner">
				<introduction></introduction>
				<key></key>
				<recommendation-list></recommendation-list>
            </div>
		</main>
		<siteFooter></siteFooter>

	</div>

</template>

<script>
import icons from '@/components/icons.vue'
import hero from '@/components/header.vue'
import siteFooter from '@/components/footer.vue'
import introduction from '@/components/introduction.vue'
import recommendationList from '@/components/Recommendations/list.vue'
import key from '@/components/key.vue'
export default {
	name: 'app',
	components: {
		icons,
		hero,
		siteFooter,
		introduction,
		recommendationList,
		key
	}
}
</script>
<style lang="scss">
	@import '@/assets/styles/rva-whiskey.scss'
</style>
