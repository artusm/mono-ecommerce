//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const dotenv = require('dotenv');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  images: {
    domains: [
      'localhost',
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  nextConfig.env = dotenv.config({ path: '.env.development' });
}

module.exports = withNx(nextConfig);
