const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  stories: ['../src/**/*.stories.(tsx|js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-docs'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const cssPostProcessorPlugins = [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ];

    if (configType !== 'DEVELOPMENT') {
      cssPostProcessorPlugins.push(
        purgecss({
          content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
          whitelistPatterns: [/(ant|body|html)/],
          whitelistPatternsChildren: [/ant/]
        })
      );
    }


    return override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }),
      addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1890ff', // customize as needed
          '@link-color': '#e6a07c', // customize as needed
          '@font-size-base': '18px' // customize as needed
        }

      }),
      addPostcssPlugins(cssPostProcessorPlugins)
    )(config);
  },
};
