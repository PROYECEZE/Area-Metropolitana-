/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: false, // 💥 fuerza Webpack en lugar de Turbopack
    },
  };
  
  module.exports = nextConfig;