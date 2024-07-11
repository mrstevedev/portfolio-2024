/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1hx41nm7bdfp5.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "sp-portfolio-2024.s3.us-west-1.amazonaws.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
