const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const mode = argv.mode || "development"
    return {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        ],
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
      },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify(mode)
        })]
    };
}