const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'source-map',

  entry: {
    login: './src/login/login.js',
    signup: './src/signup/signup.js'
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./",
            useRelativePath: true,
          },
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({filename: "index.html", template: "./src/login/index.html", excludeChunks: ['signup']}),
    new HtmlWebpackPlugin({filename: "signup.html", template: "./src/signup/signup.html", excludeChunks: ['login']}),
  ],
  devServer: {
    open: true
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
}