module.exports = {
    core: {
        builder: "webpack5",
    },
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    refs: {
        'react-components': {
            title: 'React',
            url: 'http://localhost:7001',
        },
    },
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });
        return config;
    },
};
