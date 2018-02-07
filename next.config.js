module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }, {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }, {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    )
    return config
  }
}
