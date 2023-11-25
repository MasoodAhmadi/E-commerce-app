const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/**', {
      target: 'http://localhost:3001/api/',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '' },
      // headers: {
      //   apikey: "ddd",
      //   origin: null,
      // },
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader('accept-encoding', 'identity');
      },
    })
  );
};
