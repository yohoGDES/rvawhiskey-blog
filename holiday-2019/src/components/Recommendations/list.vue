<template>
	<div v-if="!loading">
		<h3>Explore Our Curated Lists or Make Your Own</h3>
		<div class="list-filters">
			<div class="list-filter">
				<label for="">Name</label>
				<input type="text" v-model="filterName">
			</div>
			<div class="list-filter">
				<label for="">Type</label>
				<select name="" id="" v-model="filterType">
					<option value="all">All</option>
					<option :value="type" v-for="type in types" :key="type.index">{{type}}</option>
				</select>
			</div>
			<div class="list-filter">
				<label for="">Price</label>
				<select name="" id="" v-model="filterPriceRange">
					<option :value="price" v-for="price in priceRange" :key="price.index">{{price.name + ' ' + price.value }}</option>
				</select>
			</div>
		</div>
		<div>
			<button @click.prevent="toggleCreateNewList()">Create a List</button>
			<div v-if="createNewList">
				<label for="">Name your list</label>
				<input type="text" v-model="newListName">
			</div>
		</div>
		<ul class="recommendation-list" v-if="filteredData">
			<li v-for="whiskey in filteredData" :key="whiskey.index" class="key-block" :class="'key-block--' + whiskey.type.charAt(0).toLowerCase()">
				<item  :whiskey="whiskey"></item>
				<span @click="barrelThief(whiskey)" v-if="createNewList">
					<span v-if="newList.indexOf(whiskey) > -1" style="color:red;">- Remove Dram</span>
					<span v-else style="color:green;">+ Add Dram</span>
				</span>
			</li>
		</ul>
		<div v-else>No results</div>
		<new-list-window
			v-if="createNewList && newList.length > 0 || createNewList && newListName"
			v-on:remove="barrelThief($event)"
			v-on:cancel-list="toggleCreateNewList()"
			:newList="newList"
			:newListName="newListName"
			/>
	</div>
</template>
<script>
import item from './item.vue'
import newListWindow from './newList.vue'
import axios from 'axios'
export default {
	name: 'list',
	components: {
		item,
		newListWindow
	},
	data() {
		return {
			loading: false,
			list: null,
			newList: [],
			createNewList: false,
			newListName: '',
			filterName: null,
			filterType: 'all',
			filterPriceRange: { name: 'All', value: '', low: 0, high: 9999 }
		}
	},
	computed: {
		whiskies() {
			return this.$store.state.whiskies
		},
		types: function() {
			// get all whiskies
			var whiskies = this.list
			var range = this.filterPriceRange
			whiskies = whiskies.filter(function(item) {
				return (item.price >= range.low && item.price <= range.high)
			})
			let types = [...new Set(whiskies.map(entry => entry.type))]

			return types
		},
		priceRange() {
			// return range
			const vm = this
			let all = { name: 'All', value: '', low: 0, high: 9999 }
			let a = { name: '$', value: '(< 25)', low: 0, high: 25 }
			let b = { name: '$$', value: '(25-50)', low: 0, high: 50 }
			let c = { name: '$$$', value: '(50-80)', low: 50, high: 80 }
			let d = { name: '$$$$', value: '(80-150)', low: 80, high: 150 }
			let e = { name: '$$$$$', value: '(150+)', low: 150, high: 9999 }

			return [all, a, b, c, d, e].filter(function(el) {
				return vm.filteredData.some(function(f) {
					return f.price >= el.low && f.price <= el.high
				})
			})
		},
		filteredData: function() {
			var name = this.filterName && this.filterName.toLowerCase()
			var type = this.filterType && this.filterType.toLowerCase()
			var range = this.filterPriceRange
			var data = this.list

			// Filter by name
			if (name) {
				data = data.filter(function(row) {
					return Object.keys(row).some(function(key) {
						return String(row[key]).toLowerCase().indexOf(name) > -1
					})
				})
			}

			// Filter by Type
			if (type !== 'all') {
				data = data.filter(function(row) {
					return Object.keys(row).some(function(key) {
						return String(row[key]).toLowerCase().indexOf(type) > -1
					})
				})
			}

			// Remove items less than $10
			data = data.filter(function(item) { return item.price > 10 })

			// Remove Duplicates
			data = data.filter((obj, pos, arr) => {
				return arr.map(mapObj => mapObj['name']).indexOf(obj['name']) === pos
			})

			// Filter by Price range
			if (range !== null) {
				data = data.filter(function(row) {
					return (row.price >= range.low && row.price <= range.high)
				})
			}

			// if (sortKey) {
			//   data = data.slice().sort(function (a, b) {
			//     a = a[sortKey]
			//     b = b[sortKey]
			//     return (a === b ? 0 : a > b ? 1 : -1) * order
			//   })
			// }

			// Order by Price
			data = data.sort(function(a, b) { return a.price - b.price })
			return data
		}
	},
	methods: {
		toggleCreateNewList() {
			this.createNewList = !this.createNewList
		},
		getADram(dram) {
			var list = this.list
			var thief = dram
			list = list.filter(item => {
				return item.name === thief
			})
			return list
		},
		pullADram(dram) {
			var thief = this.$lodash.findIndex(this.list, { name: dram })
			return this.list[thief] || 'NOPE you searched for: ' + dram
		},
		itemBetween(item) {
			var price = item.price
			return (price >= this.filterPriceRange.low && price <= this.filterPriceRange.high)
		},
		barrelThief(item) {
			var list = this.newList
			var el = this.$lodash.findIndex(list, { name: item.name })
			console.log(el)
			if (el > -1) {
				list.splice(el, 1)
			} else {
				list.push(item)
			}
			this.newList = list
		}
	},
	created() {
		const vm = this
		// axios.get('/data/full-list.json')
		// 	.then(function(res) {
		// 		console.log(res)
		// 		vm.list = res.data
		// 	}).catch(function(err) {
		// 		console.log(err)
		// 	})

		// function getCoffee() {
		// 	return new Promise(resolve => {
		// 		setTimeout(() => resolve('☕'), 2000) // it takes 2 seconds to make coffee
		// 	})
		// }

		async function getWhiskey() {
			try {
				vm.loading = true
				const wes = await axios('/data/full-list.json')
				return wes
			} catch (e) {
				vm.loading = false
				console.error(e) // 💩
			}
		}

		getWhiskey().then(function(res) {
			vm.loading = false
			vm.list = res.data
		})
	}
}
</script>
