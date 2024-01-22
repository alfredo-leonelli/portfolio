/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.alfredoleonelli.cl",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
