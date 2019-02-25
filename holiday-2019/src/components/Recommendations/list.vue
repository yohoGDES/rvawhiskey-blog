<template>
	<div class="list" v-if="!loading">
		<key :types="types"></key>
		<br>
		<h2>Explore Our Curated Lists</h2>
		<hr>
		<br>
		<div class="list-wrap">
			<div class="filter-toggle" @click="toggleFilters">
				<span v-if="!showFilters">Show Filters</span>
				<span v-else>Close Filters</span>
			</div>
			<div class="list__filters" :class="{'list__filters--open' : showFilters}">
				<h4>Filter List</h4>
				<div class="list__filter">
					<label for="">Name</label>
					<input type="text" v-model="filterName">
				</div>
				<div class="list__filter">
					<label for="">Price</label>
					<multiselect v-model="filterPriceRange"
						placeholder="Price"
						:options="priceRange"
						label="name"
						track-by="name"
						:show-labels="false"
						:searchable="false"
						:allow-empty="true"
					></multiselect>
					<!-- <select name="" id="" v-model="filterPriceRange">
						<option :value="price" v-for="price in priceRange" :key="price.index">{{price.name + ' ' + price.value }}</option>
					</select> -->
				</div>
				<div class="list__filter">
					<label for="">Sort By</label>
					<multiselect v-model="sortKey" placeholder="Sort By" :options="['price', 'name', 'type']"  :limit=500 :show-labels="false" :searchable="false" :allow-empty="true"></multiselect>
				</div>
				<div class="list__filter">
					<label for="" class="list-filter__field-label">Type</label>
					<ul>
						<li v-for="type in types" :key="type.index">
							<input type="checkbox" :id="type" :value="type.toLowerCase()" v-model="filterType">
							<label class="inline" :for="type">{{type}}</label>
						</li>
					</ul>
				</div>
				<div class="list__filter">
					<label for="" class="list-filter__field-label">Show Only</label>
					<ul>
						<li>
							<input id="vaonly" type="checkbox" v-model="virginiaOnly" :value="!virginiaOnly">
							<label for="vaonly" class="inline">Virginia Made</label>
						</li>
					</ul>
				</div>
			</div>
			<div class="list__blocks">
				<div class="list__block" v-for="range in priceRange" :key="range.index">
					<div v-if="range.name !== 'All'">
						<h3 v-if="whiskeyByPriceRange(filteredData, range.low, range.high).length > 0"><span v-if="range.low">${{range.low}}</span><span> - ${{Math.floor(range.high)}}</span><span v-if="range.title"> – {{range.title}}</span></h3>
						<ul class="recommendation-list">
							<li v-for="whiskey in whiskeyByPriceRange(filteredData, range.low, range.high)"
								:key="whiskey.index"
								class="key-block"
								:class="'key-block--' + $util.keySymbol(whiskey.type)">
								<item :whiskey="whiskey"></item>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import item from './item.vue'
import key from '@/components/key.vue'
import axios from 'axios'
export default {
	name: 'list',
	components: {
		item,
		key,
		Multiselect
	},
	data() {
		return {
			loading: false,
			list: null,
			virginia: null,
			newList: [],
			showFilters: false,
			selectedTypes: [],
			createNewList: false,
			virginiaOnly: false,
			includeOutOfState: false,
			outOfState: [],
			sortKey: 'type',
			newListName: '',
			filterName: null,
			// filterType: 'all',
			filterType: [],
			sortOptions: [
				{
					name: 'Price',
					slug: 'price'
				},
				{
					name: 'Type',
					slug: 'type'
				},
				{
					name: 'Name',
					slug: 'name'
				}
			],
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

			types = types.sort()

			return types
		},
		priceRange() {
			// return range
			// const vm = this
			let all = { name: 'All', value: '', low: 0, high: 9999 }
			let a = { title: 'Affordable & Available Must Haves', name: '$ (20-39)', value: '(20-39)', low: 20, high: 39.99 }
			let b = { title: 'Step Your Game Up', name: '$$ (40-49)', value: '(40-49)', low: 40, high: 49.99 }
			let c = { title: 'The Sweet Spot', name: '$$$ (50-69)', value: '(50-69)', low: 50, high: 69.99 }
			let d = { title: 'The Pretty Penny', name: '$$$$ (70-79)', value: '(70-79)', low: 70, high: 79.99 }
			let e = { title: 'Most Impressive', name: '$$$$$ (80-99)', value: '(80-99)', low: 80, high: 99.99 }
			let f = { title: 'Baller', name: '$$$$$$ (100-149)', value: '(100-149)', low: 100, high: 149.99 }
			let g = { title: 'Topshelf Afficianado', name: '$$$$$$$ (150+)', value: '(150+)', low: 150, high: 9999 }

			// return [all, a, b, c, d, e, f, g].filter(function(el) {
			// 	return vm.filteredData.some(function(f) {
			// 		return f.price >= el.low && f.price <= el.high
			// 	})
			// })
			return [all, a, b, c, d, e, f, g]
		},
		filteredData: function() {
			var name = this.filterName && this.filterName.toLowerCase()
			var types = (this.filterType.length <= 0 ? 'all' : this.filterType)
			var range = this.filterPriceRange
			var data = this.list
			var sortKey = this.sortKey

			// Filter by name
			if (name) {
				data = data.filter(function(row) {
					return Object.keys(row).some(function(key) {
						return String(row[key]).toLowerCase().indexOf(name) > -1
					})
				})
			}

			// Filter by Type
			// if (type !== 'all') {
			// 	data = data.filter(function(row) {
			// 		return Object.keys(row).some(function(key) {
			// 			return String(row[key]).toLowerCase().indexOf(type) > -1
			// 		})
			// 	})
			// }

			// Filter by type
			if (types !== 'all') {
				data = data.filter(function(el) {
					return types.includes(el.type.toLowerCase())
				})
			}

			// Remove items less than $10
			data = data.filter(function(item) { return item.price > 10 })

			// Remove items that aren't VA made
			if (this.virginiaOnly) {
				data = data.filter(function(item) { return item.virginiaMade })
			}

			// Remove items that aren't VA made
			// if (this.includeOutOfState) {
			// 	data = data.filter(function(item) { return item.outOfState })
			// }

			// // Allow items that aren't VA exclusive
			// if (this.includeOutOfState) {
			// 	this.outOfState.forEach(element => {
			// 		data.push(element)
			// 	})
			// }

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

			if (sortKey === 'price') {
				// Order by Price
				data = data.sort(function(a, b) { return a.price - b.price })
			} else {
				data = data.slice().sort(function(a, b) {
					a = a[sortKey]
					b = b[sortKey]
					return (a === b ? 0 : a > b ? 1 : -1) * 1
				})
			}

			return data
		}
	},
	methods: {
		toggleCreateNewList() {
			this.createNewList = !this.createNewList
		},
		toggleFilters() {
			this.showFilters = !this.showFilters
		},
		getADram(dram) {
			var list = this.list
			var thief = dram
			list = list.filter(item => {
				return item.name === thief
			})
			return list
		},
		whiskeyByPriceRange(whiskies, low, high) {
			return whiskies.filter(function(row) {
				return (row.price >= low && row.price <= high)
			})
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
		var root = (process.env.NODE_ENV === 'production' ? process.env.BASE_URL : process.env.VUE_APP_ROOT)
		async function getWhiskey(file) {
			try {
				vm.loading = true
				const wes = await axios(root + '/data/' + file + '.json')
				return wes
			} catch (e) {
				vm.loading = false
				console.error(e) // 💩
			}
		}

		// getWhiskey('full-final').then(function(res) {
		// 	vm.list = res.data
		// 	// vm.loading = false
		// 	getWhiskey('out-of-state').then(function(oos) {
		// 		oos.data.forEach(element => {
		// 			vm.list.push(element)
		// 		})
		// 		vm.loading = false
		// 	})
		// })
		getWhiskey('holiday-2019').then(function(res) {
			vm.list = res.data.list
			vm.loading = false
		})
	}
}
</script>
