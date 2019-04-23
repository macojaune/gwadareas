const Airtable = require("airtable")

class AirtableSource {
	static defaultOptions() {
		return {
			typeName: "AirtableNode"
		}
	}
	
	constructor(api, opts) {
		this.base = new Airtable({apiKey: opts.apiKey}).base(opts.base)
		this.store = api.store
		this.opts = opts
		
		api.loadSource(args => this.addNode(args))
	}
	
	async addNode() {
		const {opts, base, store} = this
		const lieuType = store.addContentType({
			typeName: "Lieu",
			route: "/lieu/:slug",
			refs: {
				owner: {
					key: "id",
					typeName: "Eclaireur"
				},
				commune: {
					key: "id",
					typeName: "Commune"
				},
				avis: {
					key: "id",
					typeName: "Avis"
				}
			}
		})
		
		const avisType = store.addContentType({
			typeName: "Avis",
			refs: {
				owner: {
					key: "id",
					typeName: "Eclaireur"
				},
				photos: {
					key: "id",
					typeName: "Photo"
				}
			}
		})
		const communeType = store.addContentType({
			typeName: "Commune",
			route: '/commune/:slug',
			refs: {
				lieux: {
					key: "id",
					typeName: "Lieu"
				}
			}
		})
		
		const ownerType = store.addContentType({
			typeName: "Eclaireur"
		})
		const photosType = store.addContentType({
			typeName: "Photo"
		})
		
		try {
			
			await base("Lieux").select().eachPage((data, fetchNextPage) => {
				data.forEach(d => {
					
					const lieu = d._rawJson
					let l = lieu.fields
					
					lieuType.addNode({
						id: lieu.id,
						title: l.Title,
						fields: {
							latitude: l.latitude,
							longitude: l.longitude,
							type: l.Type,
							commune: l.Commune,
							access_avg: l.Accessible,
							passage_avg: l.Passage,
							avis: l.Avis,
							owner: l.Eclaireur
						}
					})
				})
				fetchNextPage()
			})
			
			await base("Avis").select().eachPage((data, fetchNextPage) => {
				data.forEach(d => {
					
					const avis = d._rawJson
					let a = avis.fields
					
					avisType.addNode({
						id: avis.id,
						fields: {
							owner: a.Eclaireur,
							access: "" + a.Accessible,
							passage: "" + a.Passage,
							note: "" + a.Note,
							comment: a.Commentaire,
							access_night: a["Accès nocturne"],
							is_owner: a["Avis éclaireur"],
							photos: a.Photos,
							created: a.createdTime
						}
					})
				})
				fetchNextPage()
			})
			
			await base("Communes").select().eachPage((data, fetchNextPage) => {
				data.forEach(d => {
					
					const commune = d._rawJson
					let c = commune.fields
					
					communeType.addNode({
						id: commune.id,
						fields: {
							nom: c.Nom,
							lieux: c.Lieux
						}
					})
				})
				fetchNextPage()
			})
			
			await base("Eclaireurs").select().eachPage((data, fetchNextPage) => {
				data.forEach(d => {
					
					const eclaireur = d._rawJson
					let e = eclaireur.fields
					
					ownerType.addNode({
						id: eclaireur.id,
						fields: {
							username: e.Pseudo,
							email: e.Email,
							url: e.Portfolio
						}
					})
				})
				fetchNextPage()
			})
			
			await base("Photos").select().eachPage((data, fetchNextPage) => {
				data.forEach(d => {
					
					const photo = d._rawJson
					let p = photo.fields
					
					photosType.addNode({
						id: photo.id,
						fields: {
							url: p.URL
						}
					})
				})
				fetchNextPage()
			})
			
		} catch (e) {
			console.log("error", e.message)
		}
		
	}
}


module.exports = AirtableSource