const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Arahkan entry ke file src/index.js
  entry: './src/index.js', 
  
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()], // Node modules tidak ikut dibundle
  output: {
    path: path.resolve(__dirname, 'dist'), // Hasil build akan masuk ke folder 'dist'
    filename: 'index.js' // Nama file hasil akhirnya nanti 'index.js'
  },
  resolve: {
    extensions: ['.js'],
  },
};