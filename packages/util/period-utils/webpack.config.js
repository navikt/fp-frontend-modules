const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, './src');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: '@navikt/period-utils',
      type: 'umd',
    },
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: SRC_DIR,
      loader: 'babel-loader',
      options: {
        rootMode: "upward",
      },
    }],
  },

  externals:  [{
    'cross-env': 'cross-env',
    dayjs: 'dayjs',
    jest: 'jest',
    typescript: 'typescript',
    webpack: 'webpack',
    'webpack-cli': 'webpack-cli',
  }],

  resolve: {
    extensions: ['.js', '.ts'],
  },

  plugins: [new CleanWebpackPlugin()],

  optimization: {
    moduleIds: 'named',
  },
}
