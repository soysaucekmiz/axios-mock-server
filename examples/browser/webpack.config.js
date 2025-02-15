const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    port: 3000,
    watchContentBase: true
  },
  watchOptions: {
    ignored: [/node_modules/, /mocks\/(?!\$route\.js).*$/]
  }
}
