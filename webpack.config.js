const path = require("path");
const { ProvidePlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/i,
        include: [
          path.resolve(__dirname, "index.tsx"),
          path.resolve(__dirname, "src"),
        ],
        use: "babel-loader",
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env'],
        //   },
        // },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
    // rules: [
    //   {
    //     test: /\.tsx?$/,
    //     use: ["babel-loader"],
    //     exclude: /node_modules/,
    //   },
    //   {
    //     test: /\.css$/i,
    //     include: path.resolve(__dirname, "src"),
    //     use: ["style-loader", "css-loader", "postcss-loader"]
    //   }
    // ],
  },
  plugins: [
    new ProvidePlugin({
      React: "react",
    }),
  ],
};
// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: "./index.tsx",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "babel-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "public"),
//   },
// };
