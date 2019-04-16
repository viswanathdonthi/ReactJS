const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './MyApps/7_ComponentLifeCycle/main.js',
   output: {
      path: path.join(__dirname, '/MyApps/7_ComponentLifeCycle/build'),
      filename: 'custom_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './MyApps/7_ComponentLifeCycle/index.html'
      })
   ]
}