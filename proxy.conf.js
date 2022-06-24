const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://nvxjwhdl.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;