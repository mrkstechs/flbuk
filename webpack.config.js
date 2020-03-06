const path = require('path');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./webpack.${env.mode}.js`)(env);

module.exports = env => {
  return webpackMerge(
    {
      mode: env.mode,
      entry: {
        app: './src/index.js'
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js/'),
        chunkFilename: '[name].js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: '../fonts/'
                }
              }
            ]
          },
          {
            test: /\.(svg|png|jp(e)g|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: '../imgs/'
                }
              },
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true
                }
              }
            ]
          },
        ]
      }
    },
    modeConfig(env),
  );
};