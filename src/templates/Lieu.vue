<template lang="pug">
	Layout
		Map.mt-4(:lieu="{latitude:$page.lieu.latitude, longitude:$page.lieu.longitude}")
		h1.mt-3 {{$page.lieu.title}}
			a.btn-link.btn.btn-lg(:href="'https://waze.com/ul?ll='+$page.lieu.latitude+','+$page.lieu.longitude" target="_blank")
				i.fas.fa-location-arrow
		g-link(:to="'/commune/'+$page.lieu.commune[0].slug")
			h3.badge.badge-pill.badge-warning {{$page.lieu.commune[0].nom}}
		p {{$page.lieu.avis[0].comment}}
		p.text-right.text-muted par
			a(:href="$page.lieu.owner[0].url")  @{{$page.lieu.owner[0].username}}
		.row.justify-content-center
			.col-2.align-self-start(v-for="img in $page.lieu.avis[0].photos")
				a(:href="$page.lieu.owner[0].url" target="_blank")
					img.img-thumbnail(:src="makeLink(img.url)")
		.container-fluid.bg-light
			.row(v-if="$page.lieu.avis.length > 1")
				.col
					h6.mb-2 Autres Avis
					ul.list-group.list-group-flush
						li.list-group-item(v-for="avis in $page.lieu.avis.slice(1)")
			.row.mt-3.p-3.bg-dark(v-show="!showForm")
				.col.text-center
					p.lead.text-white Il n'y a pas d'autres avis sur ce lieu.
					button.btn.btn-lg.btn-warning(@click="toggleForm()") Ajoute ton avis
			.row.mt-3.p-3.bg-dark(v-show="showForm")
				.col
					NewAvis

</template>

<page-query>
	query Lieu($path: String!) {
	lieu(path: $path) {
	title
	latitude
	longitude
	type
	commune {
	nom
	slug
	}
	accessAvg
	passageAvg
	avis {
	owner {
	username
	url
	}
	comment
	access
	accessNight
	passage
	note
	photos {
	url
	}
	}
	owner {
	username
	url
	}
	}
	}

</page-query>
<script>
	import Map     from "~/components/Map"
	import NewAvis from "~/components/NewAvis"
	
	export default {
		name: "Lieu",
		components: {NewAvis, Map},
		data() {
			return {
				showForm: false,
			}
		},
		methods: {
			makeLink(url) {
				let link
				if (url.includes("instagram"))
					link = url + "media/?size=l"
				else link = url
				return link
			},
			toggleForm(){
				this.showForm = !this.showForm
			}
		},
	}
</script>

<style scoped>

</style>