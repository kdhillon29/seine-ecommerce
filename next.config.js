/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dfr8hvid5/**/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
