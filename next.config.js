/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    serverActions: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
module.exports = nextConfig;
