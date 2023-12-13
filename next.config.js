/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://webservice.torshoshirin.com/api",
    HOSTNAME: "web.torshoshirin.com",
    URL: "https://webservice.torshoshirin.com",
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
