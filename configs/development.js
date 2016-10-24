import webpack from 'webpack';
import HtmlwebpackPlugin from 'html-webpack-plugin';

import paths from './paths';

const output = paths.app;
const devtool = 'source-map';

export default {
  devtool,
  entry: [
    'babel-polyfill',
    `${paths.app}/index`,
  ],
  output: {
    path: output,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: `${paths.app}/index.html`,
    }),
  ],
  devServer: {
    contentBase: output,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png',
      },
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel?cacheDirectory=true'],
        exclude: /node_modules/,
        include: output,
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
