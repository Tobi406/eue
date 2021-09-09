const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');
const withMDX = require('@next/mdx')();

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
};

module.exports = withPlugins([
  withPreact,
  withMDX,
], nextConfig)