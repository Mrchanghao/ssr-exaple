const path = require('path');

module.exports = {
  // inform webpack that building a bundle for node js 
  // rather than for the browser
  target: 'node',
  // weback root file 
  entry: './src/index.js',
  // webapck put where bundling file 

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // run babel on every file it runs through 
  module: {
    rules: [
      {
        test: /\.js?$/,  // all js file 
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions' ]} }]
          ]
        }
      }
    ]
  }
}