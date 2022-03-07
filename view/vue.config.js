module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    https: false,
    port: 8087,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3003/api',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '/api': ""
        }
      },
    }
  },
};
