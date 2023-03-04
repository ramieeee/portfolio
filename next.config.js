/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL || "http://localhost:3000",
  },
};

module.exports = nextConfig;
