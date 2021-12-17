const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');
const withMDX = require('@next/mdx')();

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
   webpack: (config, { isServer }) => {
     if (!isServer) {
       config.resolve.fallback.fs = false;
     }
     return config;
   },
   images: {
    loader: 'imgix',
    path: '',
    domains: ['flag.pk'],
   },
};

module.exports = withPlugins([
  withPreact,
  withMDX,
], nextConfig)