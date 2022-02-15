const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const COMMON_WEBPACK_CONFIG = require('../../../config/webpack.config.js');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const peerDeps = require('./package.json').peerDependencies;

const config = {
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: '@navikt/fp-forms',
      type: 'umd',
    },
  },
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],

  plugins: [new CleanWebpackPlugin()],
}

module.exports = merge(COMMON_WEBPACK_CONFIG, config);
