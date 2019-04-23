<template lang="pug">
	
	.card.bg-dark.text-white
		img.card-img(:alt="lieu.title+' image'" :src="this.getRandomImg(lieu)")
		.card-img-overlay
			g-link(:to="'/commune/'+lieu.commune[0].slug")
				span.badge.badge-pill.badge-warning {{lieu.commune[0].nom}}
			g-link(:to="'/lieu/'+lieu.slug")
				h5.card-title {{ lieu.title }}
			a(:href="lieu.owner[0].url" target="_blank")
				p.card-subtitle.mb-2.text-muted
					small Posté par
					|  @{{lieu.owner[0].username}}

</template>

<script>
	export default {
		name: "AreaItem",
		props: ["lieu"],
		computed: {},
		methods: {
			makeLink(url) {
				let link
				if (url.includes("instagram"))
					link = url + "media/?size=l"
				else link = url
				return link
			},
			getRandomImg(lieu) {
				let nbAvis = lieu.avis.length
				let index = Math.floor(Math.random() * nbAvis)
				let nbPhotos = lieu.avis[index].photos.length
				let index2 = Math.floor(Math.random() * nbPhotos)
				return this.makeLink(lieu.avis[index].photos[index2].url)
			}
		}
	}
</script>

<style scoped>

</style>