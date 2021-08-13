const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
};

module.exports = withPlugins([
  withPreact,
], nextConfig)