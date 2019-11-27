/**
 *
 * Created by shenzaifang on 2019-11-25
 */

const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base');

const prodConfig = {
  module: {
    rules: [

    ],
  },
  plugins: [
    new OptimizeCSSAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
};
module.exports = merge(baseConfig, prodConfig);
