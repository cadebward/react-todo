module.exports = {
  entry: [
    './app/app'
  ],
  output: {
    filename: 'public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6.js', '.less']
  },
  module: {
    loaders: [
      { test: /\.jsx$/,     loaders: ['6to5'], exclude: /node_modules/   },
      { test: /\.es6\.js$/, loaders: ['6to5'], exclude: /node_modules/   }
    ]
  }
};
