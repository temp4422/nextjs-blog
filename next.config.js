const { default: build } = require('next/dist/build')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  distDir: 'build',
  // Redirect from page
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //       permanent: true, // triggers 308
  //     },
  //   ]
  // },
}

module.exports = nextConfig
