
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  lintOnSave: false,
  devServer: {
    proxy: { //配置跨域
      '/api': {
        target: 'https://itunes.apple.com/hk',
        secure: false,
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      importWorkboxFrom: 'local',
      importsDirectory: 'js',
      navigateFallback: '/',
      navigateFallbackBlacklist: [/\/api\//]
    }
  }
}
