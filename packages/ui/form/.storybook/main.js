const path = require('path');
const SRC_DIR = path.resolve(__dirname, '../src');
const CORE_DIR = path.resolve(__dirname, '../node_modules');

module.exports = {
    core: {
        builder: "webpack5",
    },
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules = config.module.rules.concat({
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
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[name]_[local]_[contenthash:base64:5]',
                  },
                },
              }, {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    modules: true,
                    localIdentName: '[name]_[local]_[contenthash:base64:5]',
                    modifyVars: {
                      nodeModulesPath: '~',
                      coreModulePath: '~',
                    },
                  },
                },
              }],
              include: [SRC_DIR],
            }, {
              test: /\.(less|css)?$/,
              use: [
                {
                  loader: 'style-loader',
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
              include: [CORE_DIR],
          });

          config.resolve.extensions.push('.ts', '.tsx', '.less');

        return config;
    },
};
