module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
      open: true,
      port: 8080,
      proxy: {
          '/api': {
              target: 'http://localhost:8081/api/',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
};