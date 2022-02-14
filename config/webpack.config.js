module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './index.ts',
  module: {
    rules: [{
      test: /\.(tsx?|ts?)$/,
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
    }, {
      test: /\.(svg)$/,
      type: 'asset/resource',
      generator: {
        filename: '[name]_[contenthash].[ext]',
      },
    }],
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },

  optimization: {
    moduleIds: 'named',
  },
}
