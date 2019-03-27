const path = require('path');

module.exports = {

	entry: './app/main.js',
	
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},

	module: {
	  rules: [
	    {
	      test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['es2015','react'], plugins: ['transform-object-rest-spread']
	        }
	      }
	    },
		{
		  test:/\.less$/,
		  use:['style-loader','css-loader','less-loader'] // 编译顺序从右往左
		}
	  ]
	},
	watch: true
};