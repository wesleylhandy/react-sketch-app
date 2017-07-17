module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?s/,
				include: /app/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	},
	devtool: 'inline-source-map'
}