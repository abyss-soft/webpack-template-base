const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlPluginRemove = require("html-webpack-plugin-remove");
const isProduction = process.env.NODE_ENV !== "production";

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};

// Base Webpack config
module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    lk: `${PATHS.src}/lk.js`
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: isProduction ? [/node_modules/, /\.smart-gread-layer$/] : /node_modules/,
    },
    {
      // Fonts
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]"
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]"
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, config: { path: "./postcss.config.js"} }
        }, {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, config: { path: "./postcss.config.js" } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      "~": PATHS.src,
      vue$: "vue/dist/vue.js"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      inject: true,
      template: `${PATHS.src}/index.html`,
      filename: "./index.html"
    }),
	new HtmlPluginRemove(/<!--deletestart-->[\s\S]*<!--deleteend-->/gi),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: "" }
    ])
  ],
};
