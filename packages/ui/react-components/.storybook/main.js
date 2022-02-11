const path = require('path');
const CORE_DIR = path.resolve(__dirname, '../node_modules');
const SRC_DIR = path.resolve(__dirname, '../src');

module.exports = {
    core: {
        builder: "webpack5",
    },
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });

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
          });

          config.resolve.extensions.push('.ts', '.tsx', '.less');

        return config;
    },
};
