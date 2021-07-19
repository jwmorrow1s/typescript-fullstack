const path = require('path');
const env = process.env.ENV_UI || 'development';

module.exports = {
  entry: './src/ui/main.ts',
  devtool: 'inline-source-map',
  watch: true,
  mode: env,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          configFile: path.resolve(__dirname, './tsconfig.ui.json'),
          compilerOptions: {
            noEmit: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
