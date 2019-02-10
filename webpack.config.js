const path = require('path');

module.exports = {
  entry: {
    validation: './src/index.js'
  },

  mode: 'production',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: 'validation',
    libraryTarget: 'window',
    libraryExport: 'default'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  "ie": "11"
                },
                loose: true,
                useBuiltIns: "usage"
              }
            ]
          ]
        }
      }
    ]
  },
};
