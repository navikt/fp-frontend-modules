const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const COMMON_WEBPACK_CONFIG = require('../../../config/webpack.config.js');
const { merge } = require('webpack-merge');
const peerDeps = require('./package.json').peerDependencies;

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: '@navikt/fp-react-components',
      type: 'umd',
    },
  },

  externals: Object.keys(peerDeps).map((d) => ({
    [d]: d,
  })),

  plugins: [new CleanWebpackPlugin()],
}

module.exports = merge(COMMON_WEBPACK_CONFIG, config);
