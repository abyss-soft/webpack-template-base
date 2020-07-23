const webpack =  require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
require("dotenv").config();


// Development config
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.DefinePlugin({  // plugin to define global constants
      APP_ENV: JSON.stringify(process.env.APP_ENV),
      API_KEY: JSON.stringify(process.env.API_KEY)
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ]
});

// eslint-disable-next-line no-unused-vars
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});


