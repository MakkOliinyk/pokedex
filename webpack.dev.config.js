const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/main.js',
    ],

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            },
            __DEV__: 'true',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    output: {
        path: path.resolve(__dirname, '/server/static/'),
        filename: 'main.js',
        publicPath: '/static/',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    'classnames-loader',
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=___[name]__[local]___[hash:base64:5]',
                    'postcss-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/,
            },
            {
                test: /\.gif$/,
                loader: 'file-loader?limit=10000&mimetype=image/gif',
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader?limit=10000&mimetype=image/jpg',
            },
            {
                test: /\.png$/,
                loader: 'file-loader?limit=10000&mimetype=image/png',
            },
            {
                test: /\.svg/,
                loader: 'file-loader?limit=26000&mimetype=image/svg+xml',
            },
            {
                test: /\.(woff|woff2|ttf|eot)/,
                loader: 'file-loader?limit=1',
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'eslint-loader' },
                    { loader: 'import-glob' },
                ],
                exclude: [/node_modules/, /server/],
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
    },

    devtool: 'source-map',

    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
};
