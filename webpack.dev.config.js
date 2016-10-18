var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// disable the hot reload
module.exports.entry = __dirname + '/' + module.exports.app_root + '/main.js';

// export css to a separate file
module.exports.module.loaders[1] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css!postcss!sass'),
};
module.exports.plugins.push(new ExtractTextPlugin('../css/main.css'));
