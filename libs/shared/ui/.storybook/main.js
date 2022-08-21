const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.resolve.alias['next/image'] = require.resolve('./NextImage.jsx');
    config.resolve.alias['next/link'] = require.resolve('./NextLink.jsx');

    const plugin = config.plugins.find(
      (plugin) => plugin instanceof webpack.DefinePlugin
    );
    plugin.definitions['process.env.PUB_API_URL'] = JSON.stringify('/');

    // add your own webpack tweaks if needed

    return config;
  },
};
