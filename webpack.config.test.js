var path = require('path')

module.exports={
	entry:{
		'index': path.resolve(__dirname,'./src/index.js')
	},
	output:{
		'path': path.resolve(__dirname,'./dist/'),
		'filename': '[name].js'
	},
	resolve:{
		alias:{

		}
	},
	module:{
		rules: [
			{
				test:/\.css$/,
				exclude:/node_modules/,
				// loaders:'style-loader!css-loader'
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|jpe?g|svg|svg)(\?.*)?$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:10000
						}
					}
				],
			}
		]
	}
}