<template>
	<div id="app" class="global-wrapper">
		<icons></icons>
		<hero></hero>

		<main class="content-wrapper">
            <div class="content__inner">
				<introduction></introduction>
				<recommendation-list v-if="!editLists"></recommendation-list>
				<list-builder v-else></list-builder>
				<p>
                    If you're looking for something that falls out of the price range of this list please feel free to reach out to us on social media (<a href="https://www.instagram.com/rvawhiskey" target="_blank">instagram</a>, <a href="https://www.facebook.com/rvawhiskey" target="_blank">facebook</a>, <a href="https://twitter.com/rvawhiskey">twitter</a>) and we will be happy to offer some recommendations!
                </p>
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
import listBuilder from '@/components/Recommendations/builder.vue'

export default {
	name: 'app',
	components: {
		icons,
		hero,
		siteFooter,
		introduction,
		recommendationList,
		listBuilder
	},
	data() {
		return {
			editLists: false
		}
	}
}
</script>
<style lang="scss">
	@import '@/assets/styles/rva-whiskey.scss'
</style>
