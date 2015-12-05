const path = require( 'path' );
const util = require( 'util' );
const pkg = require( '../package.json' );
const loaders = require( './loaders' );
const plugins = require( './plugins' );
const autoprefixer = require ( 'autoprefixer' );


const DEV = process.env.NODE_ENV === 'dev';
const PROFILE = process.env.PROFILE || '';

const jsBundle = path.join( 'js', util.format( '[name].%s.js', pkg.version ) );
const entries = {
    app:      ['./app.js'],
    vendors:  ['react', 'react-dom', 'react-router', 'history'],
    polyfills: ['babel-polyfill']
};

if( DEV ) {
    entries.app.push(
        util.format( 'webpack-dev-server/client?http://%s:%d', pkg.config.devHost, pkg.config.devPort ),
        'webpack/hot/dev-server'
    );
}

var context = path.join( __dirname, '../src' );

module.exports = {
    context:   context,
    entry:     entries,
    target:    'web',
    output:    {
        path:       path.resolve( pkg.config.buildDir ),
        publicPath: '/',
        filename:   jsBundle,
        pathinfo:   false
    },
    resolve:   {
        root:       context,
        extensions: ['', '.js', '.json', '.jsx'],
        alias: (pkg.config.alias[PROFILE] || {})
    },
    module:    {
        loaders: loaders
    },
    plugins:   plugins,
    devtool:   DEV ? 'inline-source-map' : false,
    cache:     DEV,
    debug:     DEV,
    postcss: [
        autoprefixer
    ],
    devServer: {
        contentBase: path.resolve( pkg.config.buildDir ),
        reload:      util.format( 'http://%s:%d', pkg.config.devHost, pkg.config.devPort ),
        hot:         true,
        noInfo:      true,
        inline:      true,
        stats:       { colors: true }
    }
};