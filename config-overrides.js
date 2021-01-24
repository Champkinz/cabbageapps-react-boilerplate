const path = require("path");
const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
  addBabelPlugin,
  addWebpackAlias,
  setWebpackTarget,
  addWebpackPlugin,
} = require("customize-cra");
const purgecss = require("@fullhuman/postcss-purgecss");
const webpack = require("webpack");

module.exports = (config, env) => {
  const mode = config.mode;
  const cssPostProcessorPlugins = [
    require("tailwindcss")("./tailwind.js"),
    require("autoprefixer"),
  ];
  if (mode !== "development") {
    cssPostProcessorPlugins.push(
      purgecss({
        content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
        // zoom is added to fix ant-design tooltips
        whitelist: [],
        whitelistPatterns: [
          /(ant|body|html|zoom|h1|h2|h3|h4|h5|h6|p|drag|fade)/,
        ],
        whitelistPatternsChildren: [
          /(ant|window-mode|drag|data-slate|force|tabindex|fade)/,
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      })
    );
  }

  const overrideConfigs = [
    // Hot Reloading
    process.env.NODE_ENV !== "production"
      ? addBabelPlugin("react-hot-loader/babel")
      : null,
    addWebpackAlias({
      "react-dom":
        process.env.NODE_ENV === "production"
          ? "react-dom"
          : "@hot-loader/react-dom",
    }),
    // Fix Ant Imports
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: false,
    }),
    // Add Less Loader with replacement
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        // '@link-color': '#e6a07c', // customize as needed
        "@font-size-base": "14px", // customize as needed
        // ...darkThemeVars,
      },
    }),
    // Add Tailwind and Purge CSS
    addPostcssPlugins(cssPostProcessorPlugins),
  ].filter((e) => e);

  return override(...overrideConfigs)(config, env);
};
