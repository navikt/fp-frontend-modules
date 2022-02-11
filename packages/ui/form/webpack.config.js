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
      name: '@navikt/fp-react-components',
      type: 'umd',
    },
  },
  module: {
    rules: [{
      test: /\.(tsx?|ts?)$/,
      include: SRC_DIR,
      loader: 'babel-loader',
      options: {
        rootMode: "upward",
      },
    }, {
      test: /\.(less|css)?$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            esModule: true,
          },
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                nodeModulesPath: '~',
                coreModulePath: '~',
              },
            },
          },
        }],
    }],
  },

  externals:  [{
    classnames: 'classnames',
    'cross-env': 'cross-env',
    dayjs: 'dayjs',
    'lodash.throttle': 'lodash.throttle',
    typescript: 'typescript',
    webpack: 'webpack',
    react: 'react',
    'react-collapse': 'react-collapse',
    'react-dom': 'react-dom',
    'react-popper': 'react-popper',
    'style-loader': 'style-loader',
  }, /^nav-frontend-.*/ ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },

  plugins: [new CleanWebpackPlugin()],

  optimization: {
    moduleIds: 'named',
  },
}
