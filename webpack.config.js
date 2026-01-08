const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env = {}) => {
  const environment = env.aws || "development";
  const isProd = environment === "production";
  console.log("Run with Env Configuration:", environment);
  return {
    mode: isProd ? "production" : "development",

    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "/",
    },
    target: ["web", "es2017"],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
      modules: ["node_modules"],
      fallback: {
        buffer: require.resolve("buffer/"),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              allowTsInNodeModules: true,
            },
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: `./config.${isProd ? "prd" : "dev"}.env`,
      }),
      new NodePolyfillPlugin(),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: "public/images", to: "images" }],
      }),
      new ModuleFederationPlugin({
        name: "athena",
        filename: "athena.js",
        remotes: {},
        exposes: {},
        shared: {
          react: { singleton: true, requiredVersion: deps.react },
          "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        },
      }),
    ],
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      client: { overlay: true },
    },
  };
};
