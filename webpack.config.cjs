// @js-check
/* eslint-disable */
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');;
const path = require('path');
// const env = require('npm').argv.env;

// console.log('web pack');

let libraryName = 'algo';

let plugins = [];

module.exports = env => {
  console.log(env)
  let outputFile = 'algo';

  if (env.build === true) {
    // plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
  } else {
    outputFile = libraryName + '.js';
  }

  return {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        }
      ]
    },
    // resolve: {
    //   modules: [path.resolve('./node_modules'), path.resolve('./src/js')],
    //   extensions: ['.json', '.js']
    // },
    optimization: {
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        // new UglifyJsPlugin({
        //   cache: true,
        //   parallel: true,
        //   sourceMap: true
        // })
      ]
    }
    // plugins: plugins
  };
}
