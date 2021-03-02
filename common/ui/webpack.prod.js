const path = require('path');

const main = [
  'core-js',
  './src/index.tsx'
];

module.exports = {
  context: process.cwd(), // to automatically find tsconfig.json
  entry: {
    main: main
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ],
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), 'build'),
    // Below two important lines!
    library: 'xyzUI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};