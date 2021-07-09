module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-twitter-clone-coding/' : '/',
  pages: {
    unauth: {
      entry: 'src/pages/unauth/main.js',
      template: 'public/index.html',
      filename: 'unauth.html',
    },
    authed: {
      entry: 'src/pages/authed/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
}