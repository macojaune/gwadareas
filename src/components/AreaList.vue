<template lang="pug">
	.lieux
		.row.mb-2
			.h2 Les lieux
		.row
			.col-6.col-md-3(v-for="edge in $static.allLieu.edges" :key="edge.node.id" )
				AreaItem(:lieu="edge.node")
</template>

<script>
	import AreaItem from "~/components/AreaItem"
	
	export default {
		name: "AreaList",
		components: {AreaItem}
	}
</script>

<static-query>
	query Lieux {
	allLieu {
	edges {
	node {
	id
	title
	slug
	owner{
	id
	username
	url
	}
	commune{
	slug
	id
	nom
	lieux{
	id
	slug
	}
	}
	avis{
	id
	comment
	photos{
	url
	}
	owner{
	id
	username
	url
	}
	}
	}
	}
	}
	}

</static-query>