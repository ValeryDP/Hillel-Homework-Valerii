const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: './dist',
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
        {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset/resource',
            generator: {
            filename: 'images/[name][ext]',
            },
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        }),
        new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new ImageMinimizerPlugin({
            minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
                plugins: [
                ['mozjpeg', { quality: 75 }],
                ['pngquant', { quality: [0.6, 0.8] }],
                ],
            },
            },
        }),
        ],
    },
};
