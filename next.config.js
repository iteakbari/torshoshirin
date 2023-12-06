/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://webservice.torshoshirin.com/api",
    HOSTNAME: "web.torshoshirin.com",
  },
  images: {
    domains: ["admin.torshoshirin.com"],
  },
};

module.exports = nextConfig;
