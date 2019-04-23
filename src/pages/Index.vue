<template lang="pug">
	Layout
		.row.mt-3
			.col.text-center
				h1.m-3 Gwad'Areas
					br
					small Les meilleurs lieux photos/vidéos de Guadeloupe.
				g-link.btn.btn-primary.mb-3(:to="{name:'ajouter'}") Ajouter un lieu
		AreasList
</template>

<script>
	import AreasList from "~/components/AreaList"
	
	export default {
		components: {AreasList}
	}
</script>
