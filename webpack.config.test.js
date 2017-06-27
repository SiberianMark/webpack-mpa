var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports={
	entry:{
		index: path.resolve(__dirname,'./src/index.js')
	},
	output:{
		path: path.resolve(__dirname,'./dist/'),
		// filename: "[name].[hash].js"
		filename: "[name].[chunkhash].js"
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
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
				// use:[
				// 	{
				// 		loader:"file-loader"
				// 	}
				// ],
				loader: 'file?name=./src/assets/font/[name].[ext]',
				
			},
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"output Management",
			filename: 'index/index.html',
			hash:true,
			showErrors:true
		})
	]
}