const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: __dirname + '/src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    plugins: [
        new HtmlWebpackPlugin({template: __dirname + '/src/index.html'})
    ],

    mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',

    // Enable sourcemaps for debugging webpack's output.
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,

    devServer: {
        devServer: {
            contentBase: __dirname + 'dist',
            hot: true,
            open: true,
            port: 9000
        }
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};