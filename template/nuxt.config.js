module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  head: {
    title: 'starter',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },
  loading: {color: '#0091EA'},
  css: ['~assets/css/main.css'],
  build: {},
  modules: ['~modules/typescript.ts'],
}
