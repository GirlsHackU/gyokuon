module.exports = {
    entry: {
        app: ["./src/index.ts"]
    },
    output: {
        path: "static",
        filename: "js/app.js"
    },
    devServer: {
        contentBase: 'static',
        hot: true
    },
    // source-mapを出力
    devtool: "#source-map",
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /(\.js$|\.jsx$)/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /(\.ts$)/, loader: 'babel?presets=react&presets=es2015!ts'},
            {test: /(\.tsx$)/, loader: 'ts-loader'},
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
        ]
        // loaders: [
        //   {
        //     test: /\.(ts|tsx)$/,
        //     exclude: /node_modules/,
        //     loader: 'ts-loader',
        //     query: {
        //       presets: ['es2015', 'react']
        //     }
        //   }
        // ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx', '.css'],
        alias: {
            reactdatepickercss: '../node_modules/react-datepicker/dist/react-datepicker.min.css',
            bootstrap: '../node_modules/bootstrap/dist/css/bootstrap.css'
        }
    }
};