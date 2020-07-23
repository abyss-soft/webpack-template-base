const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

// Production config
const productionWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: []
});

// eslint-disable-next-line no-unused-vars
module.exports = new Promise((resolve, reject) => {
  resolve(productionWebpackConfig);
});
