import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		whiskies: [
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/bowman-brothers-virginia-straight-bourbon',
				name: 'Bowman Brothers Small Batch',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/1792-small-batch-bourbon',
				name: '1792 Small Batch',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/henry-mckenna-single-barrel-bourbon',
				name: 'Henry McKenna 10 Year',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/eagle-rare-10-year-bourbon"',
				name: 'Eagle Rare',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/sazerac-rye-6-yr',
				name: 'Sazerac',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/crown-royal-northern-harvest-rye-whiskey',
				name: 'Crown Royal Northern Harvest',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/blackback-honey-rye-whiskey',
				name: 'Blackback Honey Rye',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/balcones-baby-blue-corn-whiskey"',
				name: 'Balcones Baby Blue Corn Whiskey',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/the-glenrothes-sherry-cask-reserve-scotch',
				name: 'The Glenrothes Sherry Cask (or Bourbon Cask) Reserve Scotch',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/hell-cat-maggie-irish-whiskey"',
				name: 'Hell Cat Maggie',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/jameson-black-barrel-irish-whiskey',
				name: 'Jameson Black Barrel Irish Whiskey',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/john-j-bowman-virginia-straight-bourbon"',
				name: 'John J Bowman',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/angels-envy-port-barrel-bourbon',
				name: "Angel's Envy Port Barrel Finished",
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/1792-single-barrel-bourbon',
				name: '1792 Single Barrel',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/reservoir-rye-whiskey',
				name: 'Reservoir Rye (375ml)',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/catoctin-creek-roundstone-rye-whisky',
				name: 'Catoctin Creek Roundstone Rye',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/ragged-branch-straight-bourbon-rye',
				name: 'Ragged Branch Rye',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/highland-park-12-year-viking-honour',
				name: 'Highland Park 12 yr Vikings Honour',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/ardbeg-10-year-islay-single-malt-scotch',
				name: 'Ardbeg 10 yr',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/old-forester-1920-craft-bourbon',
				name: 'Old Forrester 1920',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/stagg-jr',
				name: 'Stagg Jr',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/blanton-single-barrel-bourbon"',
				name: "Blanton's Single Barrel",
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/catoctin-creek-roundstone-rye-whiskey-92-proof',
				name: 'Catoctin Creek 92 Proof',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/pikesville-rye-110-proof',
				name: 'Pikesville 110 Proof Rye',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/west-cork-barrel-proof-irish-whiskey',
				name: 'West Cork Barrel Proof Irish Whiskey',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/talisker-storm',
				name: 'Talisker Storm',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/glenfiddich-14-year-scotch',
				name: 'Glenfiddich 14 yr',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/virginia-highland-whisky"',
				name: 'Virginia Highland Whisky',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/stranahan-colorado-whiskey',
				name: 'Stranahan Colorado Whiskey',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/bookers-bourbon',
				name: "Booker's",
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/belle-meade-bourbon-single-barrel',
				name: 'Belle Meade Single Barrel',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/whistle-pig-straight-rye-whiskey',
				name: 'Whistle Pig 10',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/oban',
				name: 'Oban 14 Yr',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/hibiki-harmony-whiskey',
				name: 'Hibiki Japanese Harmony',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/nikka-coffey-grain-whisky',
				name: 'Nikka Coffey Grain',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/bushmills-single-malt-irish-whiskey',
				name: 'Bushmills Single Malt 12',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/little-book"',
				name: 'Little Book',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/joseph-magnus-bourbon',
				name: 'Joseph Magnus Bourbon',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/woodford-reserve-master-collection-smoked-cherry',
				name: 'Woodford Reserve Master Collection Smoked Cherry',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/reservoir-bourbon#/product?productSize=1"',
				name: 'Reservoir Bourbon (750ml)',
				type: '',
				cost: '',
				country: '',
				virginiaMade: true
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/talisker-distillers-edition',
				name: 'Talisker Distillers Edition',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/yamazaki-12-year-whisky"',
				name: 'Yamazaki 12 Year',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/high-west-whiskey-rendezvous-rye',
				name: 'High West Rendezvous Rye',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/high-west-whiskey-campfire',
				name: 'High West Campfire',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/kavalan-classic-single-malt',
				name: 'Kavalan Classic Single Malt',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/bourbon/jeffersons-ocean-aged-at-sea-cask-strength',
				name: "Jefferson's Ocean Cask Strength",
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/lagavulin-single-malt',
				name: 'Lagavulin 16',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/scotch/caol-ila-15-year-scotch',
				name: 'Caol Ila 15 Year',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/whistlepig-12-year-old-world-straight-rye-whiskey',
				name: 'Whistlepig Old World',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			},
			{
				url: 'https://www.abc.virginia.gov/products/whiskey/bushmills-21-year-single-malt-irish-whiskey',
				name: 'Bushmills 21 Year Single Malt',
				type: '',
				cost: '',
				country: '',
				virginiaMade: false
			}
		]
	},
	mutations: {

	},
	actions: {
		getExternalData: function({ commit, state }, settings) {
			/**
                'settings' must contain the following params:
                    @param: endpoint, type String
                    @param: mutation, String, reference a $store.mutation
            */
			var root = state.root
			var action = settings.endpoint
			console.log(root + '/' + action)
			// Start loading animation
			// context.commit('updateLoading', true);
			axios.get(root + '/' + action)
				.then(function(response) {
					console.log('external data')
					console.log(response.data)
					// Stop Loading Animation
					// context.commit('updateLoading', false);
					commit(settings.mutation, response.data)
				})
				.catch(function(error) {
					// Display the error if any exists
					console.log(error)
					// context.commit('updateLoading', false);
				})
		}
	}
})
