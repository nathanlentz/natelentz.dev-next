/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const withBundlerAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const plugins = [withBundlerAnalyzer]

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = withPlugins([...plugins], nextConfig)
