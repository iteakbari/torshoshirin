/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  env: {
    NEXT_PUBLIC_API_URL: "https://webservice.torshoshirin.com/api",
    HOSTNAME: "web.torshoshirin.com",
  },
  images: {
    domains: ["localhost", "web.torshoshirin.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
        port: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
