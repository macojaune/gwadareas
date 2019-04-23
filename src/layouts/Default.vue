<template lang="pug">
	.all
		nav.navbar.navbar-expand-lg.navbar-light.bg-light
			g-link.navbar-brand(:to="{ name: 'home' }") Gwad'Areas
			button.navbar-toggler(type='button' data-toggle='collapse' data-target="#navbarContent" aria-controls='navbarContent' aria-expanded='false' aria-label="Afficher le menu")
				span.navbar-toggler-icon
			.collapse.navbar-collapse#navbarContent
				ul.navbar-nav.ml-auto
					li.nav-item(:class="{'active':$route.path == '/ajouter'}")
						g-link.nav-link( :to="{ name: 'ajouter' }") Éclaire-nous !
					li.nav-item(:class="{'active':$route.path == '/contact'}")
						g-link.nav-link( :to="{ name: 'contact' }") Contact
		#content.container.pb-5
			slot
		footer.container-fluid.bg-dark
			.row.p-4
				.col.text-center
					p.lead.text-white Tiré au jèspom par
						a.text-warning(href="http://marvinl.com" target="_blank")  MarvinL.com
						| .
						br
						|  Inspiré par
						a.text-warning(href="https://instagram.com/brinowit" target="_blank")  @Brinowit
						| .

</template>

<script>
	
	export default {
		name: "LayoutDefault",
		metaInfo: {
			meta: [
				{name: "viewport", content: "width=device-width, initial-scale=1"}
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
					crossorigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
				}],
			script: [{
				src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
				integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", crossorigin: "anonymous"
			}, {
				src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js", integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut", crossorigin: "anonymous"
			},
				{
					src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js", integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
					crossorigin: "anonymous"
				}
			]
		}
		
	}
</script>

<style lang="stylus">
	@import url("https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css")
	@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.css")
	
	 
</style>
