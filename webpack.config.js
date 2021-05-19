const webpack = require('webpack');
const package = require('./package');

const license = `@name     ${package.name}
@version  ${package.version}
@desc     ${package.description}
@author   ${package.author.name} <${package.author.email}> (${package.author.url})
@see      {@link https://koozaki.com/romaji-conv/}
@license  ${package.license}`;

module.exports = {
  mode: 'production',
  entry: './browser/entry.js',
  output: {
    filename: 'romaji-conv.js'
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: license
    })
  ]
};
