/**
 *
 * Created by shenzaifang on 2019-11-25
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const ssrConfig = {

};
module.exports = merge(baseConfig, ssrConfig);
