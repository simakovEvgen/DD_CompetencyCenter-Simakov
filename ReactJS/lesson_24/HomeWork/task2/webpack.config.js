var webpack = require('webpack');

module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                    {
                        presets: ['es2015', 'react']
                    }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            }
        ]
    },
    watch: true
};