<template>
	<div class="new-list">
		<span @click="cancelList">Cancel</span>
		<h4 v-if="newListName">{{newListName}}</h4>
		<ul>
			<li v-for="whiskey in newList" :key="whiskey.index" class="key-block" :class="'key-block--' + $util.keySymbol(whiskey.type)">
				<item :whiskey="whiskey"></item> <span @click="removeItem(whiskey)" class="list-control list-control--remove"></span>
			</li>
		</ul>
		<button>Save List</button>
	</div>
</template>
<script>
import item from '@/components/Recommendations/item'
import axios from 'axios'
export default {
	name: 'new-item',
	components: {
		item
	},
	props: {
		newList: {
			type: Array
		},
		newListName: {
			type: String
		}
	},
	methods: {
		removeItem(item) {
			const vm = this
			vm.$emit('remove', item)
		},
		cancelList() {
			this.$emit('cancel-list')
		},
		saveList() {
			var list = {
				name: this.newListName,
				list: this.newList
			}
			axios.post('', list)
				.then(function(res) {
					console.log(res)
				})
				.catch(function(err) {
					console.log(err)
				})
		}
	}
}
</script>
