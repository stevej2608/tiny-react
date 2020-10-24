const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://decembersoft.com/posts/say-goodbye-to-relative-paths-in-typescript-imports/

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: {
    app: ['./src/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      "react": srcPath('./react/react'),
      "react-dom": srcPath('./react/react-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: false,
    port: 1234
  }
}
