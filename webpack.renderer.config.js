const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.(scss|css)$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
});

rules.push( {
  test: /\.svg$/,
  use: [
    {
      loader: 'svg-url-loader',
      options: {
        limit: 10000,
      },
    },
    '@svgr/webpack'
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
