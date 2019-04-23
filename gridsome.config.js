// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

module.exports = {
	siteName: "Gwad'Areas",
	plugins: [
		{
			use: "~/src/sources",
			options: {
				apiKey: "keyGYr8IWcGCgiF0c",
				base: "appphWEIVKCQn2udv"
			}
		}],
	chainWebpack: config => {
		config.module.rule("pug").test(/\.pug$/).use("pug-plain-loader").loader("pug-plain-loader")
	}
}