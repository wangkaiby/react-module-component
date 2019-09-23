const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/mirco/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.cm\.styl$/,
        loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!stylus-loader'
      },
      			{
				resource: {
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		
				},
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'static/img/[name].[hash:7].[ext]'
						}
					}
				]
			}
    ]
  },
};