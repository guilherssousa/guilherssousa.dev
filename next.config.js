const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "miro.medium.com"],
  },
};

module.exports = withContentlayer(nextConfig);
