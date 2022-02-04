const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
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
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                },
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    esModule: false,
                },
            },
            // {
            //     test: /\.s?css$/,
            //     use: [
            //         "style-loader",
            //         MiniCSSExtractPlugin.loader,
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 plugins: () => [autoprefixer()],
            //             },
            //         },
            //         "sass-loader",
            //     ],
            // },
            {
                test: /\.css$/,
                use:
                    [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                    ]
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCSSExtractPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
};
