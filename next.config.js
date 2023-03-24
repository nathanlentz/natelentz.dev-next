const { withContentlayer } = require('next-contentlayer')
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  outputFileTracing: true,
  experimental: {
    appDir: false,
  },
}

module.exports = withVanillaExtract(withContentlayer(nextConfig))
