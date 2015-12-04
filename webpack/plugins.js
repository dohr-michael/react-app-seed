const webpack = require( 'webpack' );
const util = require( 'util' );
const pkg = require( '../package.json' );


const DEV = process.env.NODE_ENV === 'dev';

const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin( {
        names:    ['vendors', 'polyfills'],
        filename: util.format( 'js/[name].%s.js', pkg.version )
    } )
];

if( DEV ) {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
} else {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin()
    );
}


module.exports = plugins;
