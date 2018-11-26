const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
	},
	devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			port: 3000
	},
	module:{
			rules:[
					{
							test: /\.(png|jp(e*)g|svg)$/,  
							use: [{
									loader: 'url-loader',
									options: { 
											limit: 8000,
											name: 'images/[hash]-[name].[ext]'
									} 
							}]
					}
			]
	}
};