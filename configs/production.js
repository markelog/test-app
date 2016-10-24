import webpack from 'webpack';
import HtmlwebpackPlugin from 'html-webpack-plugin';

import paths from './paths';

const devtool = 'source-map';
const minify = {
  collapseWhitespace: true,
  removeComments: true,
};

export default {
  devtool,
  entry: [
    'babel-polyfill',
    `${paths.app}/index`,
  ],
  output: {
    path: paths.dist,
    publicPath: '',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: `${paths.app}/index.html`,
      minify,
    }),
  ],
  devServer: {
    contentBase: paths.app,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3001,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel?cacheDirectory=true'],
        exclude: /node_modules/,
        include: paths.app,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass',
        ],
      },
    ],
  },
};
