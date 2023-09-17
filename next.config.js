/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  distDir: 'build',
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('.'));

    return config;
  },
};

module.exports = nextConfig;
