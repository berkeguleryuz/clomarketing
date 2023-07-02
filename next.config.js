/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com", "www.pexels.com"],
      },
      experimental: {
        appDir: false,
      },
}

module.exports = nextConfig;
