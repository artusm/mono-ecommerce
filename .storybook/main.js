const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs
    config.plugins.push(new WindiCSSWebpackPlugin());

    // Return the altered config
    return config;
  },
};
