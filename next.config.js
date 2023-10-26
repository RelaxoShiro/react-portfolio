/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.discordapp.com"],
  },
};
module.exports = nextConfig;
