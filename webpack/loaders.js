var pkg = require( '../package.json' );

const DEV = process.env.NODE_ENV === 'dev';

const jsLoader = [
    'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'
];

const htmlLoader = [
    'file-loader?name=[path][name].[ext]',
    'template-html-loader?' + [
        'raw=true',
        'engine=lodash',
        'csp=' + ( DEV ? pkg.config.csp.dev : pkg.config.csp.prod ),
        'version=' + pkg.version,
        'title=' + pkg.name,
        'debug=' + DEV
    ].join( '&' )
].join( '!' );


module.exports = [
    {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: jsLoader
    },
    {
        test:   /\.html$/,
        loader: htmlLoader
    }
];
