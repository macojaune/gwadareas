<template lang="pug">
	.ajouter-avis
		h3.text-light Ajouter un avis
		form.text-light
			.form-group
				.input-group
					.input-group-prepend
						.input-group-text @
					input.form-control(type="text" name="pseudo" placeholder="Pseudo" v-model='avis.pseudo'
					required)
			.form-group
				p C'est un Lieu Public
				.form-check
					input.form-check-input(type="checkbox" name="isPublic" id="isPublic"
					v-model='avis.isPublic')
					label.form-check-label(for='isPublic') {{avis.isPublic ===1 ? "Oui": "Non"}}
			.form-group
				label Le lieu est accessible ?
				input.form-control-range(type='range' min='1' max=5 name="accessible" v-model='avis.accessible')
			.form-group
				label Il y a t il du passage ?
				input.form-control-range(type='range' min='1' max=5 name="passage" v-model="avis.passage")
			.form-group
				p Peut-on y accéder de nuit ?
				.form-check
					input.form-check-input(type="checkbox" v-model='avis.nocturne' name="nocturne" id="nocturne")
					label.form-check-label(for='nocturne') {{avis.nocturne===1? "Oui":"Non"}}
			.form-group
				label Ton histoire, anecdote…
				textarea.form-control(rows=3 v-model="avis.commentaire")
				
			p Met nous des liens vers tes photos (instagram, unsplash, tumblr, site internet… )
			.form-group
				.url.my-2(v-for="(url,index) in urls")
					input.form-control(type="text" v-model="avis.photos[index]")
				a.text-center.btn.btn-sm(@click="urls++") + Ajouter une ligne
			.form-group
				label Ta note globale
				input.form-control-range(type='range' min='1' max=5 name="note" v-model='avis.note')
			button.btn.btn-lg.btn-success(:click="validForm()") Envoyer

</template>

<script>
	export default {
		name: "NewAvis",
		data() {
			return {
				avis: {
					pseudo: "",
					isPublic: 1,
					accessible: 3,
					passage: 3,
					nocturne: 1,
					commentaire: "",
					photos:[],
					note:3
				},
				urls: 2,
			}
		},
		methods:{
			validForm(){
			
			}
		}
	}
</script>

<style scoped>

</style>