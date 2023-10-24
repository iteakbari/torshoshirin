/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://localhost:44301/api",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
