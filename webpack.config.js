var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js', // Main ES6 input file
    output: {
        path: __dirname,
        filename: 'bundle.js' // ES5 bundle output file
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'), // File to compile with Babel
                query: {
                  presets:  ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
