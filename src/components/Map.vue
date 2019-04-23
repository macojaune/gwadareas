<template lang="pug">
	.maps.container-fluid
		.row
			.col
				vue-mapbox-map#map(
				:access-token='accessToken'
				:interactive='true'
				:geocoder='false'
				:lng='lieu.longitude'
				:lat='lieu.latitude'
				:zoom='12'
				:pitch='20'
				:bearing='0'
				@mapbox-ready='mapSet'
				)
</template>

<script>
	import VueMapboxMap from "vue-mapbox-map"
	import icon from '~/assets/mapbox-icon.png'
	export default {
		name: "Map",
		components: {VueMapboxMap},
		props: ["lieu"],
		data() {
			return {
				accessToken: "pk.eyJ1IjoibWFydmlubCIsImEiOiJjamNnYmtpdDQyMW5vMnF1ajhzcHY4Z2dpIn0.KNVYRkHK6TW5v5vb-rHbVQ",
			}
		},
		methods: {
			mapSet(map) {
				map.loadImage(icon,  (error, image)=> {
					if (error) throw error
					map.addImage("icon", image)
					map.addLayer({
						"id": "points",
						"type": "symbol",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"features": [{
									"type": "Feature",
									"geometry": {
										"type": "Point",
										"coordinates": [this.lieu.longitude, this.lieu.latitude]
									}
								}]
							}
						},
						"layout": {
							"icon-image": "icon",
							"icon-size": 0.25
						}
					})
				})
			}
		}
	}
</script>


<style lang="stylus">
	#map
		height 400px
		width 100%
</style>