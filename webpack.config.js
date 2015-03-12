module.exports = {
  entry: "./examples/button/App.js",
  output: {
    filename: "./examples/button/bundle.js"
  },
  resolve: {
    alias: {
      'firebase': 'firebase/lib/firebase-web'
    }
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};