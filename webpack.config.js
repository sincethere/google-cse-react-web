var path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
	resolve:{
		modulesDirectories: ["my_modules", "node_modules"],
		extensions: ['', '.js', '.jsx']
	},
    entry:[
        './node_modules/whatwg-fetch/fetch.js',
        './index.js'
    ],
    output: {
        path: __dirname + '/output/assets/',
        filename: 'bundle.js'
    }
};
